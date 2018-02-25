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

-- (SignIn) fuzzy match names to a list of invitees (make sure to check the whole household, so anyone in the family can RSVP for all of them)

-- (SignIn) Set error for incorrect name

-- (MainPage) fill in handleRSVPSubmit

-- (RSVP FORM) add email section so we can email their responses

-- (RSVP FORM) add dietary restriction section and blurb at top of form
