const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 9002;
const mode = process.env.MODE;

if (mode == "story") {
  console.log("story mode");
  app.use(express.static(path.resolve(__dirname, "../front/storybook-static")));
} else {
  console.log("production mode");
  // Middleware to set CORS headers
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", `http://127.0.0.1:${port}`);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  app.use(express.static(path.resolve(__dirname, "../front/dist")));
}

app.listen(port, () => console.log(`app running on http://127.0.0.1:${port}`));
