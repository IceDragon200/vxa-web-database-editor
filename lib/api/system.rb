module Api
  class System < Base
    get '/api/system' do
      #DBE.system.map(&:to_json)
      DBE.system.to_json
    end
  end
end
