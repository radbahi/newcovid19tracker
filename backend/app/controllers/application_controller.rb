class ApplicationController < ActionController::API
    
    def encode_token(payload)
        # save string as env variable later super important
        JWT.encode(payload, 'THISISOURMOTHERFUCKINGWRISTBAND')
    end

    def auth_header
		request.headers[‘Authorization’]
    end 
    
    def decoded_token
        if auth_header
            token = auth_header.split(‘ ‘)[1]
            begin
                JWT.decode(token, "THISISOURMOTHERFUCKINGWRISTBAND", true, algorithm: ‘HS256’) 
            rescue JWT::DecodeError 
            nil
        end
    end 

    def logged_in_user
		if decoded_token
			user_id = decoded_token[0][‘user_id’]
			@user = User.find_by(id: user_id) 
		end
	end 

    def logged_in?
		!!logged_in_user
	end 

    def authorized
		render json: { message: "Please log in" }, status: :unauthorized unless logged_in? 
	end 

end
end 
