const express = require("express");
const socket = require("socket.io");

// App setup
const app = express();
const port = process.env.PORT || 4000;

// Static files
app.use(express.static("public"));

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Socket setup
const io = socket(server);

io.on("connection", socket => {
  console.log("Made socket connection", socket.id);

  // When server receives a chat signal, emit the data to ALL clients connected to the server
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });
});
