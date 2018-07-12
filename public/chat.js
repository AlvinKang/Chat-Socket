// Make connection
const socket = io.connect("http://localhost:4000");

// Query DOM
const message = document.querySelector("#message");
const handle = document.querySelector("#handle");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");
const feedback = document.querySelector("#feedback");

// Listen for user events

// When user clicks send
btn.addEventListener("click", () => {
  // Emit this "chat" signal to server along with the handle and message
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

// When a user is typing
message.addEventListener("keypress", () => {
  // Emit "typing" signal to server along with user's handle
  socket.emit("typing", handle.value);
});

// Listen for events from server

// When server emits a signal with "chat", render the message on the DOM
socket.on("chat", data => {
  // Clear any feedback
  feedback.innerHTML = "";

  output.innerHTML += `<p>
  <strong>${data.handle}: </strong>
  ${data.message}
  </p>`;
});

// When server emits a signal with "typing", render feedback on DOM
socket.on("typing", data => {
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});
