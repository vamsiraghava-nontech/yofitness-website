export default function Contact() {
  return (
    <section id="book">
      <div className="section-tag">Get in Touch</div>

      <h2 className="section-h2">
        BOOK YOUR <span>FREE TRIAL</span>
      </h2>

      <p className="section-lead">
        Share your details and our team will contact you once bookings open.
      </p>

      <div className="book-grid">
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" />
          <select>
            <option>Fitness Goal</option>
            <option>Weight Loss</option>
            <option>Muscle Building</option>
            <option>Body Transformation</option>
            <option>General Fitness</option>
          </select>
          <textarea placeholder="Message"></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>

        <div className="contact-info">
          <div>
            <h4>Location</h4>
            <p>Hyderabad, Telangana</p>
          </div>

          <div>
            <h4>Phone</h4>
            <p>+91 9642344669</p>
          </div>

          <div>
            <h4>Email</h4>
            <p>vamsi@yofitness.in</p>
          </div>

          <div>
            <h4>Opening</h4>
            <p>Launching Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}