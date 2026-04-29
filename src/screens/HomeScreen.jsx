function HomeScreen({ units, onSelectUnit }) {
  return (
    <section className="screen home-screen fade-in">
      <div className="hero-panel">
        <p className="eyebrow">Psych Escape Room</p>
        <h1>Trapped in the Learning Labyrinth</h1>
        <p className="lead">
          Three escape routes, each locked around conditioning and learning.
          Pick a level, survive the chambers, find the exit.
        </p>
      </div>

      <div className="unit-grid">
        {units.map((unit) => (
          <article key={unit.id} className="unit-card">
            <div className="unit-card-top">
              <span className="unit-emoji" aria-hidden="true">
                {unit.emoji}
              </span>
              <div>
                <h2>{unit.subtitle}</h2>
                <p className="unit-title">{unit.title}</p>
              </div>
            </div>
            <p className="unit-description">{unit.description}</p>
            <button type="button" className="primary-btn" onClick={() => onSelectUnit(unit)}>
              Enter Level
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeScreen;
