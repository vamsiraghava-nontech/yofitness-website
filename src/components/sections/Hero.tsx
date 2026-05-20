export default function Hero() {
  return (
    <section id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid-overlay"></div>

      <div className="hero-content">
        <div className="hero-tag">Premium Gym Coming Soon in Hyderabad</div>

        <h1 className="hero-h1">
          REPS
          <br />
          <span>RECOVER</span>
          <br />
          REPEAT
          {/* <br />
          STRONG. */}
        </h1>

        <p className="hero-sub">
          Yo! Fitness is Hyderabad&apos;s upcoming premium fitness destination —
          built for transformation, luxury training, elite equipment, and a
          high-energy workout experience.
        </p>

        <div className="hero-btns">
          <a href="#book" className="btn-primary">Book Free Trial</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">5000</div>
            <div className="stat-label">Sq Ft Planned</div>
          </div>
          <div>
            <div className="stat-num">6+</div>
            <div className="stat-label">Training Zones</div>
          </div>
          <div>
            <div className="stat-num">2026</div>
            <div className="stat-label">Launching Soon</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-circle"></div>
      </div>
    </section>
  );
}