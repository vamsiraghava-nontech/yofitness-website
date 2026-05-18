const services = [
  ["01", "🏋️", "Gym Membership", "Premium gym floor access with strength, cardio, and functional training zones."],
  ["02", "🎯", "Personal Training", "One-on-one coaching designed around your goals, body type, and schedule."],
  ["03", "💃", "Group Classes", "High-energy Zumba, yoga, mobility, cardio, and community-led sessions."],
  ["04", "🥗", "Diet & Nutrition", "Practical nutrition guidance for fat loss, muscle gain, and lifestyle improvement."],
  ["05", "🌿", "Recovery", "Stretching, mobility, recovery support, and wellness-focused add-ons."],
  ["06", "🔄", "Transformation", "Structured transformation programs with training, nutrition, and accountability."],
];

export default function Services() {
  return (
    <section id="services">
      <div className="services-intro">
        <div>
          <div className="section-tag">What We Offer</div>
          <h2 className="section-h2">
            OUR <span>SERVICES</span>
          </h2>
        </div>

        <p>
          Everything you need to reach your peak — under one premium roof.
        </p>
      </div>

      <div className="services-grid">
        {services.map(([num, icon, title, desc]) => (
          <div className="service-card" key={title}>
            <div className="service-num">{num}</div>
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="service-tag">Learn More →</div>
          </div>
        ))}
      </div>
    </section>
  );
}