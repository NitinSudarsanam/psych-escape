function WinScreen({ unit, relics, onGoHome }) {
  return (
    <section className="screen narrative-screen fade-in">
      <p className="eyebrow">Unit Complete</p>
      <h1>{unit.title}</h1>
      <p className="story-block">{unit.winText}</p>
      <div className="win-relics">
        {relics.map((relic) => (
          <span key={relic.name} className="win-relic-chip">
            {relic.icon} {relic.name}
          </span>
        ))}
      </div>
      <div className="screen-actions">
        <button type="button" className="primary-btn" onClick={onGoHome}>
          Return to Level Select
        </button>
      </div>
    </section>
  );
}

export default WinScreen;
