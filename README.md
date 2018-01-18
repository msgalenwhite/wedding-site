## Getting Started

This is a practice project app to design new cards for the game Dominion.

NOTE: I do not own Dominion!  I am using a game that I love to help me learn more about programming

ALSO NOTE: This is a practice project, and as such will contain comments/notes for my own knowledge. If I submit a finished/final version of this project, I will of course clean out my note-taking

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

- Come up with overall aesthetic
- Work on Deck Container so it displays all of the cards
  - Clicking on a single card will take you to its page
    - Card's page will have its own route
    - Card's page will have a link to edit it
      - fetch specific card from json
      - function to remove old card and replace it

- Make forms more useable on mobile
  - Change Cost to a field with +/- buttons
  - Have Potions
