require "./server"
run Sinatra::Application

# $stdout.sync = true
#
# require "logger"
#
# configure do
#   LOG = Logger.new(STDOUT)
#   LOG.level = Logger.const_get ENG['LOG_LEVEL'] || 'DEBUG'
#
#   LOG.info 'this is a test'
# end
