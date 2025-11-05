import React, { useState } from "react";
import emailjs from "emailjs-com";
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

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        userID
      )
      .then(() => {
        // alert("Contact form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          captcha: false,
        });
        setSuccess(true);
      })
      .catch((err) => {
        console.log("Failed to send contact form:", err);
        alert("Something went wrong! Please try again.");
      });

    console.log("Submitting form", formData);
    // http://localhost:5000/api/contact // https://sniperai-trade-web.onrender.com/api/contact
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
        alert("Contact form submitted successfully!");
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

  const siteKey = process.env.REACT_APP_SITE_KEY;

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
        <ReCAPTCHA sitekey={siteKey} onChange={handleCaptcha} />
        <button type="submit">Send Message</button>
        {success && <div className="success-msg">Thanks! I'll reply soon.</div>}
      </form>
    </section>
  );
};

export default ContactForm;
