#!/usr/bin/env ruby
#
# DatabaseEditor/server.rb
#   by IceDragon
require "active_support/inflector"
require "active_support/core_ext"

require "sinatra/base"
require "sinatra/partial"

require "slim"
require "sass"
require "coffee_script"
require "tilt"

require "rgss3tk"
require "rgss3tk/core"
require "rgss3tk/rpg"
require "rgss3tk/rpg-json"

require "yaml"

module DBE
  class << self
    attr_accessor :actor_id
  end

  @data = {}

  [:actor, :class, :skill, :item, :weapon, :armor,
   :enemy, :troop, :state, :animation, :tileset, :common_event].each do |s|
    sym = s.to_s.pluralize.to_sym
    module_function(define_method(s.to_s.pluralize) do
      @data[sym] ||= load_data("Data/#{s.to_s.pluralize.camelcase}.rvdata2")
    end)
  end

  def self.system
    @data[:system] ||= load_data("Data/System.rvdata2")
  end

  def self.terms
    system.terms
  end
end

# https://gist.github.com/jharjono/859008
class ScssHandler < Sinatra::Base
  set :views, File.dirname(__FILE__) + "/templates/scss"

  get "/css/*.css" do
    filename = params[:splat].first
    scss filename.to_sym
  end
end

class CoffeeHandler < Sinatra::Base
  set :views, File.dirname(__FILE__) + "/templates/coffee"

  get "/js/*.js" do
    filename = params[:splat].first
    coffee filename.to_sym
  end
end
# /https://gist.github.com/jharjono/859008

require_relative "lib/api"

class DatabaseEditor < Sinatra::Base
  register Sinatra::Partial

  set :partial_template_engine, :slim

  use CoffeeHandler
  use ScssHandler
  use Api::Actors
  use Api::Classes
  use Api::Skills
  use Api::Items
  use Api::Weapons
  use Api::Armors
  use Api::Enemies
  use Api::Troops
  use Api::States
  use Api::Animations
  use Api::Tilesets
  use Api::CommonEvents
  use Api::System
  use Api::Terms

  set :public_dir, File.dirname(__FILE__) + "/public"
  set :views, File.dirname(__FILE__) + "/templates"

  get "/" do
    slim :index
  end

  get "/actors" do
    slim :actors
  end

  get "/classes" do
    slim :classes
  end

  get "/skills" do
    slim :skills
  end

  get "/items" do
    slim :items
  end

  get "/weapons" do
    slim :weapons
  end

  get "/armors" do
    slim :armors
  end

  get "/enemies" do
    slim :enemies
  end

  get "/troops" do
    slim :troops
  end

  get "/states" do
    slim :states
  end

  get "/animations" do
    slim :animations
  end

  get "/tilesets" do
    slim :tilesets
  end

  get "/common_events" do
    slim :common_events
  end

  get "/system" do
    slim :system
  end

  get "/terms" do
    slim :terms
  end
end
