## Getting Started

This is a practice project app to design new cards for the game Dominion.

NOTE: I do not own Dominion!  I am using a game that I love to help me learn more about programming

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

- look into columns to make form prettier
- implement react router
- verify inputs?


- create page with mock-up of card from information just entered

## Page-Goals

'/cardapp'
  ***Stateful***
  * BUTTONS:
    - "New Designer"
    - "Returning Designer"

'/cardapp/welcome'
  * Title
  FORM:
    * DropDown
      1. Sir
      2. Lady
    * TextField - Name
    * Submit Button
  * BUTTON: "Returning Designer"

Every page:
  * NavBar
    1. Link to Deck
    2. Link to New Card Designer
    3. Greeting from '/cardapp'
  * Footer (with disclaimer)

'/cardapp/home'
  * buttons:
    1. View Deck
    2. Design a New Card
    3. What is Dominion?

'/cardapp/designer'
  * FORM:
    1. Name of card
    2. TextField
    3. Cost
      - Gold (with icon?) <--STAR
      - Checkbox: Potion? <--STAR
    4. Use image?
    5. BUTTON: fetch random images?
      - need component to hold images
    6. Submit Button

'/cardapp/designer/preview'
  * preview of card
  * BUTTONS:
    - go back
      ***keep data in form***
      return to '/cardapp/designer'
    - save

'/cardapp/designer/verify'
  * same as '/cardapp/home', but with message - maybe a popup?

'/cardapp/yourdeck'
  * Images
  * Names
    - link to specific page
  * Display Option for if Deck is empty

'/cardapp/yourdeck/:cardName'
  * view card info, NOT just image
