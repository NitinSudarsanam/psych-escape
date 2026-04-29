function WrongAnswerScreen({ wrongContext, onTryAgain }) {
  return (
    <section className="screen wrong-screen fade-in">
      <p className="eyebrow">The Chamber Reacts</p>
      <h1>That answer triggered a trap.</h1>
      <p className="story-block">{wrongContext?.story}</p>
      <div className="explanation-block">
        <h2>Why that's wrong</h2>
        <p>{wrongContext?.explanation}</p>
      </div>
      <div className="screen-actions">
        <button type="button" className="primary-btn" onClick={onTryAgain}>
          Try Again
        </button>
      </div>
    </section>
  );
}

export default WrongAnswerScreen;
