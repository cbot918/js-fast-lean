const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

/**
 *   process database
 */
const { getDB } = require("./db");
require("dotenv").config();
const mongoURI = process.env.dsn;

const client = getDB(mongoURI);

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve your static HTML file
app.use(express.static("public"));

// Define a route to handle the form submission
app.post("/login", (req, res) => {
  const { name, email, password } = req.body;

  // Handle the form data as needed (e.g., save it to a database)
  // For now, just log it to the console
  console.log("Received form data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  // Send a response to the client
  res.send("Form submitted successfully");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
