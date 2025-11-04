const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const axios = require("axios");
const qs = require("querystring");

router.post("/", async (req, res) => {
  // console.log("Request body:", req.body);
  const { name, email, phone, message, captcha } = req.body;

  if (!captcha)
    return res.status(400).json({ error: "CAPTCHA verification failed" });

  // Verify CAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: secretKey,
        response: captcha,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("reCAPTCHA verification response:", response.data);

    if (!response.data.success) {
      // console.log("reCAPTCHA error-codes:", response.data["error-codes"]);
      return res.status(400).json({ error: "CAPTCHA verification failed" });
    }

    // Save to Database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // console.log("Received Contact Form:", req.body);
    // console.log("Seaving to MongoDB...");

    // Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_USER,
      subject: "New inquiry received",
      html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; padding: 40px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">

    <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; text-align: center; padding: 20px;">
      <h2 style="margin: 0; font-size: 22px;">New Inquiry Received</h2>
      <p style="margin: 5px 0 0; font-size: 14px;">You’ve got a new inquiry submission from your website</p>
    </div>

    <div style="padding: 25px 30px; font-size: 16px;">
      <div style="margin-bottom: 15px; display: flex; justify-content: space-between;">
        <span style="color:#111; font-weight: 700;">👤: ${name}</span>
      </div>
      <div style="margin-bottom: 15px; display: flex; justify-content: space-between;">
        <span style="color:#111; font-weight: 700;">📧: ${email}</span>
      </div>
      <div style="margin-bottom: 15px; display: flex; justify-content: space-between;">
        <span style="color:#111; font-weight: 700;">📞: ${phone}</span>
      </div>
      <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: flex-start;">
        <span style="color:#111; font-weight: 700;">💬: ${message}</span>
      </div>
    </div>

    <div style="background-color: #f9fafb; text-align: center; padding: 15px; font-size: 13px; color: #777;">
      <em>This email was generated automatically from your website’s contact form.</em>
    </div>
  </div>
</div>

  `,
    });

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error during captcha verification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
