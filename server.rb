require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces

#what does this do?
set :public_folder, File.join(File.dirname(__FILE__), "public")

set :views, File.dirname(__FILE__) + "/views"

#I don't know what this does, exactly - it's looking for all files with something in their name, then requiring all of them and... what is also_reload?

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# HOW TO READ THE JSON FILE
def load_deck
  JSON.parse(File.read('cards.json'))
end

# API ENDPOINTS
get "/api/v1/cards" do
  deck = load_deck

  # what is content_type?
  content_type :json
  json deck
end

post "/api/v1/cards" do
  current_deck = load_deck

  card = JSON.parse(request.body.read)

  # This looks at the current deck, at the last item, at its id value, then gives our new card an id of the same + 1
  card['id'] = current_deck['cards'].last['id'] + 1

  current_deck['cards'] << card

  #what does this do?  what is pretty_generate?
  File.write('cards.json', JSON.pretty_generate(current_deck))

  content_type :json
  status 201
  json card
end

# get "/" do
#   erb :home
# end

get '*' do
  erb :home
end
