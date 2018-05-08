# Why a RSVP site?

My fiancee and I are getting married in October, and I have always wished that I could have my RSVP responses sent in an organized format, rather than by mail.  This was my attempt to use a website rather than an invitation.

# Personal Info Protection

In order for this project to work, I will need to include an array of invitees, as well as specific ceremony and event information.  I will also need to set a password that can be included on mailed invitations, so that only invited people can access the RSVP site.  

For my own protection as well as my guests', these will be included in gitignore files.  Please be aware that a cloned version of this project will not include this data, and therefore might not function as intended.  

### Form of Invitees:

Form of Invitees: Each family has its own array of strings.  If a +1 was included with the invitation, I have included "plusOne"

let invitees = [
  ["Mom's Name", "Dad's Name", "baby"],
  ["Cousin's Name", "plusOne"]
]

### Form of Invitation:

Form of Invitation: An object holding strings pertaining to "invitation" and "reception" data.

let invitationWording = {
  invitation: "You are all invited.",
  reception: "The reception will be awesome."
}

### Form of Passwords:

let passwords = {
  newRSVP: "wouldn't you like to come",
  changeRSVP: "having second thoughts?"
}

### SendGrid

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

# Needed Data:
-- (RsvpForm/Invitation) Time of the ceremony
-- (StoryForm) Deadline to submit new/changes to RSVP

# To-Do:

-- (SignIn) fuzzy match names to a list of invitees (make sure to check the whole household, so anyone in the family can RSVP for all of them)

-- (SignIn) Set error for incorrect name

-- (StoryForm)
  - button to edit a story previously submitted
    - FUNCTIONALITY - need to alert them if a partial story will be deleted

-- (MainPage)
  - fill in handleFullSubmit() function

-- add a "Galen sounds like a great developer and I would love to check out her app's functionality but I wasn't invited to her wedding" button that will load a set of 'sample' invitees and invitation wording that they can play with.

- GOAL: pull data from Database, not files

# TO-DO:
if their attending is false, can't add a plus one
allow plus one - decides if plus one block appears
using plus one -
  - also, only generate the plus one table IF they want one
  if true, ask name


- on rsvp form - can add name only if plusOne is yes
OPTIONALS -
when they enter name, a plus one is created, which has an id

# Info-Pages:
WhereTo links to multiple pages that are simple informational components.  Some good ideas would be:

XX 1. RSVP site (or Dummy Site before July 1st)
XX 2. Information about the wedding location
3. Link to registry
4. "On the Day" breakdown of where to be and when
5. Rehearsal Dinner info
6. Link to page containing everyone's submitted stories?
  -- currently: StorySummary -- requires database functionality to add fetch statement

  - text in dietary restrictions isTINY / stories 
