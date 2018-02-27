## Getting Started

My fiancee and I are getting married in October, and I have always wished that I could have my RSVP responses sent in an organized format, rather than by mail.  This was my attempt to use a website rather than an invitation.

## Personal Info Protection

In order for this project to work, I will need to include an array of invitees, as well as specific ceremony and event information.  For my own protection as well as my guests', these will be included in gitignore files.  Please be aware that a cloned version of this project will not include this data, and therefore might not function as intended.  

Form of Invitees: Each family has its own array of strings.  If a +1 was included with the invitation, I have included "plusOne"

Form of Invitation: An object holding strings pertaining to "invitation" and "reception" data.

This project also requires a SendGrid API key, which is in a gitignore .env file.

## Setup

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

## To-Do:

-- (SignIn) fuzzy match names to a list of invitees (make sure to check the whole household, so anyone in the family can RSVP for all of them)

-- (SignIn) Set error for incorrect name

-- (RSVP FORM) add email section so we can email their responses

-- (StoryForm)
  - summary of RSVP responses
  - space for email
  - blurb re: embarrassing stories
  - textarea to enter stories
  - button to add more stories
  - button to return to their rsvp responses
  - button to finally submit and email me AND THEM their responses

-- add a "Galen sounds like a great developer and I would love to check out her app's functionality but I wasn't invited to her wedding" button that will load a set of 'sample' invitees and invitation wording that they can play with.
