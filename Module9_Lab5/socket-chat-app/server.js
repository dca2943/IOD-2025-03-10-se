const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
let users = {};

const path = require("path");
app.use(express.static(path.join(__dirname)));

io.on("connection", (socket) => {
  socket.broadcast.emit("chat", "Someone joined the chat");

  socket.on("nickname", (name) => {
    users[socket.id] = name;
    io.emit("online", Object.values(users));
  });

  socket.on("message", (msg) => {
    socket.emit("message", `You: ${msg}`);
    socket.broadcast.emit("message", `${users[socket.id]}: ${msg}`);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing", `${users[socket.id]} is typing...`);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("chat", `${users[socket.id]} left`);
    delete users[socket.id];
    io.emit("online", Object.values(users));
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
