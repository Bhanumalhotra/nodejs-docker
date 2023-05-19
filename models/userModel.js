const mongoose = require("mongoose");
// Import the Mongoose library to work with MongoDB

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User must have a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
  },
});
// Define a userSchema using the Mongoose.Schema class.
// It specifies the structure and validation rules for the user data.

const User = mongoose.model("User", userSchema);
// Create a User model using the userSchema.
// The model represents a collection in the MongoDB database and provides an interface to interact with it.

module.exports = User;
// Export the User model to make it available for use in other parts of the application.
