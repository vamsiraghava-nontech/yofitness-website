const plans = [
  {
    name: "Starter",
    price: "1,499",
    duration: "per month",
    features: [
      "Full gym floor access",
      "Locker room access",
      "2 group classes/month",
    ],
  },
  {
    name: "Pro",
    price: "2,999",
    duration: "per month",
    featured: true,
    features: [
      "Full gym floor access",
      "Unlimited group classes",
      "4 PT sessions/month",
      "1 nutrition consultation",
    ],
  },
  {
    name: "Elite",
    price: "4,999",
    duration: "per month",
    features: [
      "Full gym floor access",
      "Unlimited group classes",
      "8 PT sessions/month",
      "Monthly diet plan",
      "Recovery support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-intro">
        <div className="section-tag">Membership Plans</div>

        <h2 className="section-h2">
          SIMPLE <span>PRICING</span>
        </h2>

        <p className="section-lead">
          Indicative launch pricing. Final pricing will be confirmed closer to opening.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
            key={plan.name}
          >
            {plan.featured && <div className="popular-badge">Most Popular</div>}

            <div className="plan-name">{plan.name}</div>

            <div className="plan-price">
              <span>₹</span>
              {plan.price}
            </div>

            <div className="plan-duration">{plan.duration}</div>

            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a href="#book" className="plan-btn">
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}