const express = require("express");
// Import the Express framework to create the router

const postController = require("../controllers/postController");
// Import the postController module that contains the functions for handling post-related requests

const protect = require("../middleware/authMiddleware");
// Import the protect middleware function for authentication

const router = express.Router();
// Create an instance of the Express router to define our API routes

// Route for "/". Supports GET and POST requests.
router
  .route("/")
  .get(protect, postController.getAllPosts)
  // When a GET request is made to "/", it passes through the protect middleware first to check authentication,
  // then the postController's getAllPosts function is called to handle the request and send back all posts.
  .post(protect, postController.createPost);
  // When a POST request is made to "/", it first goes through the protect middleware to ensure authentication,
  // then the postController's createPost function is called to handle the request and create a new post.

// Route for "/:id". Supports GET, PATCH, and DELETE requests.
router
  .route("/:id")
  .get(protect, postController.getOnePost)
  // When a GET request is made to "/:id", where :id is a dynamic parameter representing a specific post ID,
  // it first goes through the protect middleware for authentication,
  // then the postController's getOnePost function is called to handle the request and retrieve a specific post.
  .patch(protect, postController.updatePost)
  // When a PATCH request is made to "/:id", it passes through the protect middleware for authentication,
  // then the postController's updatePost function is called to handle the request and update a specific post.
  .delete(protect, postController.deletePost);
  // When a DELETE request is made to "/:id", it first goes through the protect middleware to ensure authentication,
  // then the postController's deletePost function is called to handle the request and delete a specific post.

module.exports = router;
// Export the router module to make it available for use in other parts of the application.
