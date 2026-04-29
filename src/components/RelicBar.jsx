function RelicBar({ relics }) {
  return (
    <aside className="relic-bar" aria-label="Collected relics">
      <div className="relic-bar-title">Collected Relics</div>
      <div className="relic-list">
        {relics.length === 0 ? (
          <span className="relic-empty">Nothing yet. Get a question right to unlock your first relic.</span>
        ) : (
          relics.map((relic) => (
            <div key={relic.name} className="relic-chip" title={relic.description}>
              <span className="relic-icon" aria-hidden="true">
                {relic.icon}
              </span>
              <span className="relic-name">{relic.name}</span>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}

export default RelicBar;
