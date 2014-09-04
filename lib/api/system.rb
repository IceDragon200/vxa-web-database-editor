module Api
  class System < Base

    get '/api/system' do
      DBE.system.map(&:to_json)
    end

  end
end
