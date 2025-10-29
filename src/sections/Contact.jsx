import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: false,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setFormData({ ...formData, captcha: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.captcha) {
      alert("Please complete the CAPTCHA");
      return;
    }

    console.log("Submitting form", formData);

    try {
      const res = await fetch(
        "https://sniperai-trade-web.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (res.ok) {
        alert("Contact Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          captcha: false,
        });
      } else {
        alert(data.error || "Something went wrong! Please try again.");
      }
    } catch (err) {
      alert("Server is not responding. Please try again later.");
      console.error("Error submitting contact form:", err);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Get in Touch with Us</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          required
        />
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <ReCAPTCHA
          sitekey="6Lf14forAAAAAJ4wmSFphK_Z3tc-FEw8B1uycMI7"
          onChange={handleCaptcha}
        />
        <button type="submit">Send Message</button>
        {success && <div className="success-msg">Thanks! I'll reply soon.</div>}
      </form>
    </section>
  );
};

export default ContactForm;
