const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const axios = require("axios");
const qs = require("querystring");

router.post("/", async (req, res) => {
  // console.log("Request body:", req.body);
  const { name, email, phone, message, captcha } = req.body;

  if (!captcha)
    return res.status(400).json({ error: "CAPTCHA verification failed" });

  // Verify CAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

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
      return res.status(400).json({ error: "CAPTCHA verification failed" });
    }

    // Save to Database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error during captcha verification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
