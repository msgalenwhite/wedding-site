## Getting Started

My fiance and I are getting married in October, and I have always wished that I could have my RSVP responses sent in an organized format, rather than by mail.  This was my attempt to use a website rather than an invitation.

## Setup

From your project directory, run the following:

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

## To-Do:
LIST OF INVITEES
- group by family

SIGN IN
- firstName
- lastName
- 'password'
-- error message if password is wrong
-- error message if name is not on list
  -- suggest alternative first names based on last name?
