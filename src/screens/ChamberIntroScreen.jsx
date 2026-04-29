function ChamberIntroScreen({ chamber, chamberIndex, totalChambers, onEnter, onGoHome }) {
  return (
    <section className="screen narrative-screen fade-in">
      <p className="eyebrow">
        Chamber {chamberIndex + 1} / {totalChambers}
      </p>
      <h1>{chamber.title}</h1>
      <p className="story-block">{chamber.intro}</p>
      <div className="screen-actions">
        <button type="button" className="secondary-btn" onClick={onGoHome}>
          Leave Unit
        </button>
        <button type="button" className="primary-btn" onClick={onEnter}>
          Enter Chamber
        </button>
      </div>
    </section>
  );
}

export default ChamberIntroScreen;
