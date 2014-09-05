module Api
  class Terms < Base
    get '/api/terms' do
      DBE.terms.to_json
    end
  end
end
