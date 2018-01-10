require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

#this string specifies the hostname/IP address to listen on when ":run" is enabled.  Default for development is 'localhost'.  Else, default is as above
set :bind, '0.0.0.0'  # bind to all interfaces

# this specifies what directory from which to serve static files.  Default is assumed to be a directory named "public" within root directory
set :public_folder, File.join(File.dirname(__FILE__), "public")

# specifies what directory view files are stored in.  Default is a directory named "views" within the root directory
set :views, File.dirname(__FILE__) + "/views"

# ####
# Breaking the next section into parts:

  # Dir[string] <-- returns an array of all files matching that string. (string is considered a "globbing string")

# File.join(File.dirname(__FILE__), 'app', '**', '*.rb')  <-- this is a PATH
  # - the options at the end are possible file endings:
    #   * matches any file, so *.rb matches any file ending in .rb
    #   ** matches directories recursively (?)
  # - this creates a string representing the file's path, by using the javascript join operation
  #   - "/" is added between options
  #   - combine the filename of THIS file, with "app" and then any of the file endings that match the * strings

# require file <-- this requires all of the files matching the description above

# also_reload <-- this says that the files should be reloaded if they have been modified
# ####

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

  #JSON.parse can only take in a string, which is why this works.
  card = JSON.parse(request.body.read)

  # This looks at the current deck, at the last item, at its id value, then gives our new card an id of the same + 1
  card['id'] = current_deck['cards'].last['id'] + 1

  current_deck['cards'] << card

  #JSON.generate() ONLY allows objects/arrays to be converted to json syntax

  #JSON.pretty_generate() - same as above except "returned document is a prettier form of the document returned by unparse" (quote from docs)

  #File.write:
    # opens the file (name given as 1st argument)
    # writes string (in this case, the data created by JSON.pretty_generate)

    # optional 3rd argument - an offset to seek before beginning to write

    # returns the LENGTH written
  File.write('cards.json', JSON.pretty_generate(current_deck))

  content_type :json
  status 201 #I think this automatically sets the success code to 201 - "Created"
  json card
end

get '*' do
  erb :home
end
