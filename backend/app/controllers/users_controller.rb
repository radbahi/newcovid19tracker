class UsersController < ApplicationController
    # before_action :authorized, only: [:persist]

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
        @user = User.find_by(username: params[:username])
        
        if @user && @user.authenticate(params[:password])
            # has_secure_password contains authenticate method
            wristband = encode_token({user_id: @user_id})
            render json: { user: UserSerializer.new(@user), token: wristband }
        else
            render json: {error: "oh fuck"}, status: 500
        end
    end
    
    def create
        @user = User.create(user_params)
        if @user.valid?
            wristband = encode_token({user_id: @user_id})
            render json:  { user: UserSerializer.new(@user), token: wristband }
        else
            render json: {error: 'BIG PROBLEM'}, status: 500
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user 
    end 

    # def persist 
    #     wristband = encode_token({user_id: @user.id})
    #     render json: { user: UserSerializer.new(@user), token: wristband }
    # end 

    # user create is getting an invalid param of user, won't create new users. 

    private 

    def user_params 
        params.permit(:username, :password, :location_id)
    end

end
