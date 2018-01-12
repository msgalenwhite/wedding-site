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

## NEXT

- Look into Regular Expressions to verify user input
- Spend time with Foundation to feel more comfortable using columns to help with design

## Page-Goals

App.js <-- IN PROGRESS
**STATEFUL**
  * Stores:
    - greeting info
    - current deck
    - addToJSON function

'/' <-- IN PROGRESS AS "HomePage"
  * BUTTONS:
    - "New Designer"
    - "Returning Designer"
  * Currently: contains name field which will end up on welcome site

'/cardapp/welcome'
  * Title
  FORM: <-- IN PROGRESS: no verification
    * DropDown
      1. Sir
      2. Lady
    * TextField - Name
    * Submit Button
  * BUTTON: "Returning Designer"

Every page:
  * NavBar <-- IN PROGRESS
    1. Link to Deck
    2. Link to New Card Designer
    3. Greeting from '/cardapp' <--TODO
  * Footer (with disclaimer) <-- HOW TO?

'/cardapp/home'
  * buttons:
    1. View Deck
    2. Design a New Card
    3. What is Dominion?

'/cardapp/designer' <-- IN PROGRESS
  * FORM:
    1. Name of card
    2. TextField
    3. Cost
      - Gold (with icon?) <--TODO
      - Checkbox: Potion?
    4. Use image?
    5. BUTTON: fetch random images? <--TODO
      - need component to hold images
    6. Submit Button
  TODO: VERIFY INPUT!

'/cardapp/designer/preview'
  * preview of card
  * BUTTONS:
    - go back
      ***keep data in form***
      return to '/cardapp/designer'
    - save

'/cardapp/designer/verify'
  * same as '/cardapp/home', but with message - maybe a popup? to say "Your new card is now a part of your deck!"

'/cardapp/yourdeck'<-- IN PROGRESS as DeckContainer
  * Images <--TODO
  * Names <--TODO
    - link to specific page <--TODO
  * Display Option for if Deck is empty <--TODO

'/cardapp/yourdeck/:cardName'
  * view card info, NOT just image of card
