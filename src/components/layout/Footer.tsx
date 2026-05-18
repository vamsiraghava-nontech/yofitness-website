export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">YO! FITNESS</span>

          <p>
            Hyderabad&apos;s premium fitness destination built for transformation,
            energy, and elite training experiences.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#book">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>

          <ul>
            <li><a href="#services">Personal Training</a></li>
            <li><a href="#services">Transformation</a></li>
            <li><a href="#services">Nutrition</a></li>
            <li><a href="#services">Group Classes</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 <span>Yo! Fitness</span>. All rights reserved.
        </p>

        <p>Made in Hyderabad</p>
      </div>
    </footer>
  );
}