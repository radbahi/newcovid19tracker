class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users
    end

    def show
        if (user = User.find_by(id: params[:id]))
            render json: user
        else
            render json: {message: "User not found"}
        end
    end

    def login 
        @user = User.find_by(params[:id])
        if @user.authenticate(params[:password])
            # has_secure_password contains authenticate method
            wristband = encode_token({user_id: @user_id})
            render json: @user
        else
            render json: {error: "oh fuck"}
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            wristband = encode_token({user_id: @user_id})
            # user = user
            # token = JWT.encode({user_id: user.id}, ENV["JWT_KEY"], 'HS256') # MUST HIDE SECRET
            render json: {user: user}
        else
            render json: {error: 'BIG PROBLEM'}
        end
    end

    private 

    def user_params 
        params.permit(:username, :password, :location_id)
    end

end
