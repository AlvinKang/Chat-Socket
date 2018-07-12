const express = require("express");

// App setup
const app = express();
const port = process.env.PORT || 4000;

// Static files
app.use(express.static("public"));

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
