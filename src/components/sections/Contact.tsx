"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        goal: formData.get("goal"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("Submitted successfully!");
      form.reset();
    } else {
      setStatus("Something went wrong. Check setup.");
    }
  }

  return (
    <section id="book">
      <div className="section-tag">Get in Touch</div>
      <h2 className="section-h2">BOOK YOUR <span>FREE TRIAL</span></h2>

      <div className="book-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" required />
          <input name="phone" type="tel" placeholder="Phone Number" required />
          <input name="email" type="email" placeholder="Email Address" />
          <select name="goal">
            <option value="">Fitness Goal</option>
            <option>Weight Loss</option>
            <option>Muscle Building</option>
            <option>Body Transformation</option>
            <option>General Fitness</option>
          </select>
          <textarea name="message" placeholder="Message"></textarea>

          <button type="submit">Submit Enquiry</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}