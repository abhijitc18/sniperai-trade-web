const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const axios = require("axios");
const qs = require("querystring");

router.post("/", async (req, res) => {
  console.log("Request body:", req.body);
  const { name, email, phone, message, captcha } = req.body;

  if (!captcha)
    return res.status(400).json({ error: "CAPTCHA verification failed" });

  // Verify CAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      qs.stringify({
        secret: secretKey,
        response: captcha,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!response.data.success) {
      return res.status(400).json({ error: "CAPTCHA verification failed" });
    }

    // Save to Database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    console.log("Received Contact Form:", req.body);
    console.log("Seaving to MongoDB...");

    // Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_USER,
      //   subject: "New Contact Form Submission",
      //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      subject: "test mail",
      text: "if you see this mail, then nodemailer is working fine",
    });

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(
      "Error processing contact form:",
      error.response?.data || error.message || error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
