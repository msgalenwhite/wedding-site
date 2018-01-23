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
ISSUES:
When user "goes back" to edit a card, they lose their type choice and potions choice.  This isn't too big of an issue if I end up getting rid of the Verify page, but otherwise it's really annoying

CHANGES TO DESIGN FORM:
X  - DROP-DOWN
X    - card type (have options pull from dataset)

  - UP-AND-DOWN
    - +Actions
    - +Cards
    - +Buys
    - Cost

  - PREVIEWS
    - show what image the user has selected via Url
    - MAYBE - instead of a preview page, the user could view the card immediately while they're designing it

CHANGES TO SCSS:
  - For Card display:
    - Change px to %

CHANGES TO DECK CONTAINER:
  - Clicking on a single card will take you to its page
      - Card's page will have its own route
      - Card's page will have a link to edit it
        - fetch specific card from json
        - function to remove old card and replace it

NEW THINGS TO LEAN:
 - Jest
    - learn and write tests
