require_relative 'api-server'

use Rack::ShowExceptions

run DatabaseEditor.new
