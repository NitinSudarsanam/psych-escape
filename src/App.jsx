import { useMemo, useReducer } from 'react';
import './App.css';
import RelicBar from './components/RelicBar';
import { units } from './data/units';
import { gameReducer, initialGameState } from './gameReducer';
import ChamberIntroScreen from './screens/ChamberIntroScreen';
import HomeScreen from './screens/HomeScreen';
import IntroScreen from './screens/IntroScreen';
import QuestionScreen from './screens/QuestionScreen';
import RoomClearScreen from './screens/RoomClearScreen';
import WinScreen from './screens/WinScreen';
import WrongAnswerScreen from './screens/WrongAnswerScreen';

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const currentUnit = state.unit;
  const currentChamber = currentUnit?.chambers[state.chamberIdx] ?? null;
  const currentQuestion = currentChamber?.questions[state.questionIdx] ?? null;

  const showRelicBar = !['home', 'intro', 'win'].includes(state.screen) && currentUnit;

  const shellClassName = useMemo(() => {
    const classes = ['app-shell'];
    if (state.screen === 'home') classes.push('home');
    if (currentUnit) classes.push(currentUnit.theme);
    return classes.join(' ');
  }, [state.screen, currentUnit]);

  const goHome = () => dispatch({ type: 'GO_HOME' });

  let screen = <HomeScreen units={units} onSelectUnit={(unit) => dispatch({ type: 'SELECT_UNIT', payload: unit })} />;

  if (state.screen === 'intro' && currentUnit) {
    screen = (
      <IntroScreen
        unit={currentUnit}
        onStart={() => dispatch({ type: 'START_UNIT' })}
        onGoHome={goHome}
      />
    );
  }

  if (state.screen === 'chamber-intro' && currentChamber && currentUnit) {
    screen = (
      <ChamberIntroScreen
        chamber={currentChamber}
        chamberIndex={state.chamberIdx}
        totalChambers={currentUnit.chambers.length}
        onEnter={() => dispatch({ type: 'ENTER_CHAMBER' })}
        onGoHome={goHome}
      />
    );
  }

  if (state.screen === 'question' && currentQuestion && currentChamber) {
    screen = (
      <QuestionScreen
        question={currentQuestion}
        questionIndex={state.questionIdx}
        totalQuestions={currentChamber.questions.length}
        chamberTitle={currentChamber.title}
        onCorrect={() => dispatch({ type: 'ANSWER_CORRECT' })}
        onWrong={(context) => dispatch({ type: 'ANSWER_WRONG', payload: context })}
      />
    );
  }

  if (state.screen === 'wrong') {
    screen = (
      <WrongAnswerScreen
        wrongContext={state.wrongContext}
        onTryAgain={() => dispatch({ type: 'TRY_AGAIN' })}
      />
    );
  }

  if (state.screen === 'room-clear' && currentChamber && currentUnit) {
    screen = (
      <RoomClearScreen
        chamber={currentChamber}
        chamberIndex={state.chamberIdx}
        totalChambers={currentUnit.chambers.length}
        onContinue={() => dispatch({ type: 'NEXT_CHAMBER' })}
      />
    );
  }

  if (state.screen === 'win' && currentUnit) {
    screen = <WinScreen unit={currentUnit} relics={state.collectedRelics} onGoHome={goHome} />;
  }

  const activeBg = (() => {
    if (state.screen === 'intro' && currentUnit?.chamberStartBg) {
      return currentUnit.chamberStartBg;
    }
    if (state.screen === 'chamber-intro' && currentUnit) {
      return currentChamber?.background ?? null;
    }
    if ((state.screen === 'room-clear' || state.screen === 'win') && currentUnit) {
      const isLast = state.chamberIdx === currentUnit.chambers.length - 1;
      if (isLast && currentUnit.chamberEndBg) return currentUnit.chamberEndBg;
    }
    if (currentChamber?.background) {
      return currentChamber.background;
    }
    return null;
  })();

  const chamberBgStyle = activeBg ? { '--chamber-bg': `url(${activeBg})` } : {};

  return (
    <main className={shellClassName} style={chamberBgStyle}>
      <div className="bg-layer" aria-hidden="true" />
      <div className="content-shell">
        {showRelicBar ? <RelicBar relics={state.collectedRelics} /> : null}
        {screen}
      </div>
    </main>
  );
}

export default App;
