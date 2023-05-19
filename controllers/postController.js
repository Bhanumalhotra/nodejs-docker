const Post = require("../models/postModel");

// Get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.find();

    // Send a successful response with the retrieved posts
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (e) {
    // If an error occurs during the process, send a failure response
    res.status(400).json({
      status: "fail",
    });
  }
};

// Get a single post by ID
exports.getOnePost = async (req, res, next) => {
  try {
    // Find a post in the database based on the provided ID
    const post = await Post.findById(req.params.id);

    // Send a successful response with the retrieved post
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    // If an error occurs during the process, send a failure response
    res.status(400).json({
      status: "fail",
    });
  }
};

// Create a new post
exports.createPost = async (req, res, next) => {
  try {
    // Create a new post in the database using the data from the request body
    const post = await Post.create(req.body);

    // Send a successful response with the newly created post
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    console.log(e);
    // If an error occurs during the process, send a failure response
    res.status(400).json({
      status: "fail",
    });
  }
};

// Update a post by ID
exports.updatePost = async (req, res, next) => {
  try {
    // Find a post in the database based on the provided ID and update it with the new data from the request body
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated post after the update
        runValidators: true, // Run the validators defined in the postSchema during the update
      }
    );

    // Send a successful response with the updated post
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    // If an error occurs during the process, send a failure response
    res.status(400).json({
      status: "fail",
    });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res, next) => {
  try {
    // Find a post in the database based on the provided ID and delete it
    const post = await Post.findByIdAndDelete(req.params.id);

    // Send a successful response
    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    // If an error occurs during the process, send a failure response
    res.status(400).json({
      status: "fail",
    });
  }
};
