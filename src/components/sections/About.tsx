export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-visual-inner">
            YO!
            <br />
            FITNESS
          </div>

          <div className="about-accent"></div>

          <div className="about-badge">
            Est. 2025
            <span>Hyderabad, India</span>
          </div>
        </div>

        <div>
          <div className="section-tag">Our Story</div>

          <h2 className="section-h2">
            NOT JUST A GYM.
            <br />A <span>MOVEMENT.</span>
          </h2>

          <p className="section-lead">
            Yo! Fitness was born from one simple belief — fitness should
            feel premium, energetic, and transformational. We are building
            a space where beginners feel welcome, athletes feel challenged,
            and everyone feels inspired.
          </p>

          <ul className="about-points">
            <li>
              <div className="about-icon">💪</div>

              <div className="about-point-text">
                <h4>Premium Equipment</h4>

                <p>
                  International-grade machines, free weights, and functional
                  training zones.
                </p>
              </div>
            </li>

            <li>
              <div className="about-icon">🎯</div>

              <div className="about-point-text">
                <h4>Expert Trainers</h4>

                <p>
                  Certified coaches focused on real transformation and long-term fitness.
                </p>
              </div>
            </li>

            <li>
              <div className="about-icon">🔥</div>

              <div className="about-point-text">
                <h4>Transformation Focused</h4>

                <p>
                  Personalized plans, accountability, and measurable progress.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}