class LocationsController < ApplicationController

    def index
        locations = Location.all
        render json: locations
    end

    def show
        if (location = Location.find_by(country: params[:country]))
            render json: location
        else
            render json: {message: "Location not found"}
        end
    end

end
