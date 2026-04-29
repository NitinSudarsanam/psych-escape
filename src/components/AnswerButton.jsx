function AnswerButton({ answer, onSelect, disabled, state }) {
  const classNames = ['answer-button'];
  if (state) {
    classNames.push(`is-${state}`);
  }

  return (
    <button
      type="button"
      className={classNames.join(' ')}
      onClick={onSelect}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {answer.text}
    </button>
  );
}

export default AnswerButton;
