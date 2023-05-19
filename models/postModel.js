// Import the Mongoose library
const mongoose = require("mongoose");

// Define the schema for a post
const postSchema = new mongoose.Schema({
  // Title field of type String, it is required
  title: {
    type: String,
    required: [true, "Post must have a title"], // Error message if not provided
  },
  // Body field of type String, it is required
  body: {
    type: String,
    required: [true, "Post must have a body"], // Error message if not provided
  },
});

// Create a model named "Post" based on the postSchema
const Post = mongoose.model("Post", postSchema);

// Export the Post model
module.exports = Post;
