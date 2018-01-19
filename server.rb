require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces

set :public_folder, File.join(File.dirname(__FILE__), "public")

set :views, File.dirname(__FILE__) + "/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# HOW TO READ THE JSON FILE
def load_deck
  JSON.parse(File.read('cards.json'))
end

def find_user_name
  JSON.parse(File.read('userName.json'))
end

# API ENDPOINTS
get "/api/v1/cards" do
  deck = load_deck

  # what is content_type?
  content_type :json
  json deck
end

get "/api/v1/userName" do
  userName = find_user_name

  content_type :json
  json userName
end

post "/api/v1/cards" do

  current_deck = load_deck

  card = JSON.parse(request.body.read)

  card['id'] = current_deck['cards'].last['id'] + 1

  current_deck['cards'] << card

  File.write('cards.json', JSON.pretty_generate(current_deck))

  content_type :json
  status 201 #I think this automatically sets the success code to 201 - "Created"
  json card
end

post "/api/v1/userName" do

  userNameObj = find_user_name

  userNameObj["userName"] = JSON.parse(request.body.read)

  File.write('userName.json', JSON.pretty_generate(userNameObj))

  content_type :json
  status 201
  json userNameObj
end

post "/api/v1/eraseUserName" do
  userNameObj = find_user_name

  userNameObj["userName"] = ""

  File.write('userName.json', JSON.pretty_generate(userNameObj))

  content_type :json
  status 201
  json userNameObj
end

get '*' do
  erb :home
end
