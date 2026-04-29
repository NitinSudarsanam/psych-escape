# Psych Escape Room

A psychology quiz game built as an escape room. Answer questions correctly to advance through chambers and escape each level. One wrong answer sends you back to try again from the same question.

## Levels

**The Pyramid of the Mind**
Five sealed chambers covering classical conditioning, habituation, memory, and Pavlovian models. Set inside an ancient Egyptian pyramid.

**The Haunted House of Consequence**
Five rooms covering operant conditioning, shaping, outcome knowledge, delay discounting, and extinction. Set inside Hargrove Mansion.

**Alien Ship Escape Protocol**
Three sections covering punishment theory, avoidance learning, and extinction relapse. Set aboard a behaviorist alien spacecraft.

## How It Works

Each chamber contains five questions. Each question has one correct answer and three incorrect answers. A correct answer advances to the next question. An incorrect answer shows a story consequence and lets you retry from the same question. Clear all five questions to collect the chamber relic and move on.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Styling | Plain CSS with custom properties |
| Deployment | Vercel |

## Project Structure

```
psych-escape/
  public/
    images/
      unit1/    # Pyramid chamber backgrounds
      unit2/    # Haunted house chamber backgrounds
      unit3/    # Alien ship chamber backgrounds
  src/
    data/
      units.js          # All questions, answers, and image paths
    screens/
      HomeScreen.jsx
      IntroScreen.jsx
      ChamberIntroScreen.jsx
      QuestionScreen.jsx
      WrongAnswerScreen.jsx
      RoomClearScreen.jsx
      WinScreen.jsx
    components/
      AnswerButton.jsx
      RelicBar.jsx
    App.jsx
    gameReducer.js
```

## Editing Content

All question banks and chamber backgrounds live in `src/data/units.js`. Each chamber has a `background` field pointing to its image in `public/images/`. Each unit has `chamberStartBg` and `chamberEndBg` for the intro and completion screens.

## Local Setup

```bash
cd psych-escape
npm install
npm run dev
```

## Build and Deploy

```bash
npm run build
```

The `dist` folder is the output. Deploy by pushing to the connected GitHub repository and Vercel handles the rest. Set the Vercel root directory to `psych-escape`.
