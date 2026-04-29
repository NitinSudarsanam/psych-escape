import { useEffect, useMemo, useState } from 'react';
import AnswerButton from '../components/AnswerButton';

function shuffleAnswers(answers) {
  const clone = [...answers];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  chamberTitle,
  onCorrect,
  onWrong,
}) {
  const [revealedState, setRevealedState] = useState(null);
  const [selectedText, setSelectedText] = useState('');

  const shuffledAnswers = useMemo(() => shuffleAnswers(question.answers), [question.id, question.answers]);

  useEffect(() => {
    setRevealedState(null);
    setSelectedText('');
  }, [question.id]);

  const handleSelect = (answer) => {
    if (revealedState) {
      return;
    }

    setSelectedText(answer.text);
    setRevealedState(answer.correct ? 'correct' : 'wrong');

    window.setTimeout(() => {
      if (answer.correct) {
        onCorrect();
      } else {
        onWrong({
          story: question.wrongStory,
          explanation: question.explanation,
        });
      }
    }, 800);
  };

  return (
    <section className="screen question-screen fade-in">
      <p className="eyebrow">{chamberTitle}</p>
      <h2>
        Question {questionIndex + 1} / {totalQuestions}
      </h2>
      <p className="question-text">{question.text}</p>

      <div className="answers-grid" role="list" aria-label="Answer choices">
        {shuffledAnswers.map((answer) => {
          const state =
            selectedText === answer.text ? (answer.correct ? 'correct' : 'wrong') : revealedState && answer.correct ? 'correct' : null;

          return (
            <AnswerButton
              key={answer.text}
              answer={answer}
              onSelect={() => handleSelect(answer)}
              disabled={Boolean(revealedState)}
              state={state}
            />
          );
        })}
      </div>
    </section>
  );
}

export default QuestionScreen;
