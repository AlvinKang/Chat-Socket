// Make connection
const socket = io.connect("http://localhost:4000");

// Query DOM
const message = document.querySelector("#message");
const handle = document.querySelector("#handle");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");

// Emit events

btn.addEventListener("click", () => {
  // Emit this "chat" signal to server with the object
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

// Listen for events

socket.on("chat", data => {
  output.innerHTML += `<p>
  <strong>${data.handle}: </strong>
  ${data.message}
  </p>`;
});
