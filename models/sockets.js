class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      //Escuchar Evento: mensaje-from-client
      socket.on("mensaje-from-client", (data) => {
        console.log(data);
        socket.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
