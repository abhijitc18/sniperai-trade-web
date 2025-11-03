const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const app = express();
app.use(helmet());
app.use(morgan("combined"));
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connectino error:", err));

// Import Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
