class ApplicationController < ActionController::API
    def encode_token(payload)
        # save string as env variable later super important
        JWT.encode(payload, 'THISISOURMOTHERFUCKINGWRISTBAND')
    end
end
