const net = require("net");
const strftime = require("strftime")
let dt = strftime("%Y-%m-%d %H:%M") + "\n";
const server = net.createServer(function (socket) {
    socket.write(dt)
    socket.end();
})
server.listen(process.argv[2]);//port
