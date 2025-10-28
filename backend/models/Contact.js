const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: "String",
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Please fill a valid email address"],
      maxlength: [50, "Email cannot exceed 50 characters"],
    },
    phone: {
      type: "String",
      required: true,
      trim: true,
      maxlength: [20, "Phone number too long"],
      validate: {
        // allow various phone formats, optional. If you want to require it, set `required: true`
        validator: function (v) {
          if (!v) return true; // allow empty
          // basic validation: digits, spaces, +, -, parentheses
          return /^[0-9+\-\s().]{6,20}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number`,
      },
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [5, "Message must be at least 5 characters"],
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
