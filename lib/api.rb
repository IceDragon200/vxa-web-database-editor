require 'yajl'
require 'sinatra'
require 'sinatra/json'

module Api
  class Base < Sinatra::Base
    helpers Sinatra::JSON
    set :json_encoder, Yajl::Encoder

    helpers do
      def jarray(obj)
        array = obj.map do |obj|
          obj ? obj.to_h : obj
        end

        json array
      end
    end

    def self.resource(name)
      route_name = name.to_s.pluralize
      collection_name = route_name

      post "/api/#{route_name}" do
        # new resource
        ""
      end

      get "/api/#{route_name}" do
        data = DBE.send(collection_name).map do |obj|
          obj ? obj.to_h : obj
        end

        json data
      end

      get "/api/#{route_name}/:id" do
        obj = DBE.send(collection_name)[params[:id].to_i]
        json obj
      end

      post "/api/#{route_name}/:id" do
        obj = DBE.send(collection_name)[params[:id].to_i]
        obj ? json(obj) : ''
      end

      delete "/api/#{route_name}/:id" do
        id = params[:id]
        DBE.send(collection_name).delete_if do |obj|
          obj ? obj.id == id : false
        end
        DBE.send(collection_name).each_with_index do |o, i|
          next unless o
          o.id = i
        end
      end
    end

  end
end

require_relative 'api/actors'
require_relative 'api/classes'
require_relative 'api/skills'
require_relative 'api/items'
require_relative 'api/weapons'
require_relative 'api/armors'
require_relative 'api/enemies'
require_relative 'api/troops'
require_relative 'api/states'
require_relative 'api/animations'
require_relative 'api/tilesets'
require_relative 'api/common_events'
require_relative 'api/system'
require_relative 'api/terms'
