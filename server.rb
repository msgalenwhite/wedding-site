require "sinatra"
require "sinatra/reloader" if development?
require 'sinatra/activerecord'
require 'sinatra/flash'

require 'dotenv/load' if development?

require "sinatra/json"
require "json"
require "pry" if development? || test?

#added when trying to enable email
require 'sendgrid-ruby'
include SendGrid

set :bind, '0.0.0.0'  # bind to all interfaces

set :public_folder, File.join(File.dirname(__FILE__), "public")

configure do
  set :views, 'app/views'
end

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get "/api/v1/invitee_info" do
  invitee = Invitee.where(name: params[:name])
  stories = invitee.stories
  info = { invitee: invitee, stories: stories }
  json info
end

post "/testemail" do
  letter = request.body.read

  from = Email.new(email: 'test@example.com')
  subject = 'RSVP Details'
  to = Email.new(email: 'galen.h.white@gmail.com')
  content = Content.new(type: 'text/plain', value: letter)
  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

  #here we're actually sending the email
  response = sg.client.mail._('send').post(request_body: mail.to_json)


  content_type :json
  status 201
  json response.body


  # where are these being sent?  they don't show up in logs/console

  # puts response.status_code
  # puts response.body
  # puts response.headers

end

get '*' do
  # puts '===='
  # puts ENV.to_h
  # puts '==='
  erb :home
end
