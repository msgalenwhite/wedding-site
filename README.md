# RSVP

This was a project begun before I had learned about databases or Rails, and I haven't yet had time to come back and complete it.  I hope you enjoy the Frozen theme!

The goal:
To have an app where guests can submit their RSVP for a wedding, along with dietary restrictions and stories about the happy couple.

Current Status:
Completing the form does not (yet) save or send your data anywhere.

# To log in and see functionality:
To see invitation with more than one invitee, log in with:

Name: Anna
Password: frozenWedding

To see an invitation with a plus one, log in with:

Name: Anna
Password: frozenWedding

# SendGrid

This project also requires a SendGrid API key, which is in a gitignore .env file.

# Setup

To use locally, run the following from within your project folder:

```sh
$ bundle install
$ bundle exec ruby server.rb -o 0.0.0.0
```

Then, in another terminal tab, run:

```sh
$ npm install
$ npm start
```

Navigate to `localhost:4567`.

To get an 'uglified' version suitable for heroku, run 'npm build' instead of 'npm start'
