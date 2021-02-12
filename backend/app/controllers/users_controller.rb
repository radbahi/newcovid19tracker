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
            render :json => { :message => 'oh fuck' }, :status => 500
        end
    end

    def create
        @user = User.create(user_params)
        if @user.valid? && @user.authenticate(params[:password])
            @user.save
            wristband = encode_token({user_id: @user_id})
            render json:  { user: UserSerializer.new(@user), token: wristband }
        else
            render json: {error: 'BIG PROBLEM'}, status: 500
        end
    end

    def update_location
        @user = User.find(params[:id])
        @location = Location.find_by(country: params[:country])

        if @user.valid? && @location 

            @user.update(location: @location)
            render json: @user
        else
            render json: {error: "Something went wrong"}, status: 500
        end
    end


    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user
    end

    
    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    # def persist 
    #     wristband = encode_token({user_id: @user.id})
    #     render json: { user: UserSerializer.new(@user), token: wristband }
    # end 

    # user create is getting an invalid param of user, won't create new users. 

    private 

    def user_params 
        params.permit(:username, :password, :id, locations_attributes: [:country, :flag, :ISO, :confirmed, :deaths, :active, :recovered, :lat, :lon, :date])
    end

end
