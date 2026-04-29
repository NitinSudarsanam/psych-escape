export const initialGameState = {
  screen: 'home',
  unit: null,
  chamberIdx: 0,
  questionIdx: 0,
  collectedRelics: [],
  wrongContext: null,
};

function isLastQuestion(chamber, questionIdx) {
  return questionIdx >= chamber.questions.length - 1;
}

function isLastChamber(unit, chamberIdx) {
  return chamberIdx >= unit.chambers.length - 1;
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'SELECT_UNIT': {
      return {
        ...initialGameState,
        unit: action.payload,
        screen: 'intro',
      };
    }

    case 'START_UNIT': {
      if (!state.unit) {
        return state;
      }

      return {
        ...state,
        chamberIdx: 0,
        questionIdx: 0,
        collectedRelics: [],
        wrongContext: null,
        screen: 'chamber-intro',
      };
    }

    case 'ENTER_CHAMBER': {
      return {
        ...state,
        screen: 'question',
      };
    }

    case 'ANSWER_CORRECT': {
      if (!state.unit) {
        return state;
      }

      const chamber = state.unit.chambers[state.chamberIdx];
      if (!chamber) {
        return state;
      }

      if (isLastQuestion(chamber, state.questionIdx)) {
        const nextRelics = [...state.collectedRelics];
        const alreadyCollected = nextRelics.some((relic) => relic.name === chamber.relic.name);

        if (!alreadyCollected) {
          nextRelics.push(chamber.relic);
        }

        return {
          ...state,
          collectedRelics: nextRelics,
          wrongContext: null,
          screen: 'room-clear',
        };
      }

      return {
        ...state,
        questionIdx: state.questionIdx + 1,
        wrongContext: null,
        screen: 'question',
      };
    }

    case 'ANSWER_WRONG': {
      return {
        ...state,
        wrongContext: action.payload,
        screen: 'wrong',
      };
    }

    case 'TRY_AGAIN': {
      return {
        ...state,
        screen: 'question',
      };
    }

    case 'NEXT_CHAMBER': {
      if (!state.unit) {
        return state;
      }

      if (isLastChamber(state.unit, state.chamberIdx)) {
        return {
          ...state,
          wrongContext: null,
          screen: 'win',
        };
      }

      return {
        ...state,
        chamberIdx: state.chamberIdx + 1,
        questionIdx: 0,
        wrongContext: null,
        screen: 'chamber-intro',
      };
    }

    case 'GO_HOME': {
      return { ...initialGameState };
    }

    default:
      return state;
  }
}
