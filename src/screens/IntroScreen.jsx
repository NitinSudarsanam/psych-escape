function IntroScreen({ unit, onStart, onGoHome }) {
  return (
    <section className="screen narrative-screen fade-in">
      <p className="eyebrow">{unit.subtitle}</p>
      <h1>{unit.title}</h1>
      <p className="story-block">{unit.intro}</p>
      <div className="screen-actions">
        <button type="button" className="secondary-btn" onClick={onGoHome}>
          Back to Levels
        </button>
        <button type="button" className="primary-btn" onClick={onStart}>
          Begin Unit
        </button>
      </div>
    </section>
  );
}

export default IntroScreen;
