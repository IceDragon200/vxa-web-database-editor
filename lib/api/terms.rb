module Api
  class Terms < Base

    get '/api/terms' do
      DBE.terms.map(&:to_json)
    end

  end
end
