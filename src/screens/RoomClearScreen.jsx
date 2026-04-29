function RoomClearScreen({ chamber, chamberIndex, totalChambers, onContinue }) {
  return (
    <section className="screen room-clear-screen fade-in">
      <p className="eyebrow">
        Chamber {chamberIndex + 1} cleared
      </p>
      <h1>Seal Broken</h1>
      <p className="story-block">{chamber.relic.clearText}</p>
      <div className="relic-reveal">
        <span className="relic-reveal-icon" aria-hidden="true">
          {chamber.relic.icon}
        </span>
        <div>
          <h2>{chamber.relic.name}</h2>
          <p>{chamber.relic.description}</p>
        </div>
      </div>
      <div className="screen-actions">
        <button type="button" className="primary-btn" onClick={onContinue}>
          {chamberIndex + 1 === totalChambers ? 'Finish Unit' : 'Continue to Next Chamber'}
        </button>
      </div>
    </section>
  );
}

export default RoomClearScreen;
