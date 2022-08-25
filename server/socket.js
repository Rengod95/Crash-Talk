const SocketIO = require('socket.io');

module.exports = (server, app) => {
    const io = SocketIO(server, { path: '/socket.io' });
    app.set('io', io);
    const home = io.of('/home');
    const room = io.of('/room');


    home.on('connection', (socket) => {
        console.log("home 네임스페이스에 접속");
        socket.on('disconnect', () => {
            console.log("home 네임스페이스 접속 해제");
        });
    });


    room.on('connection', (socket) => {
        console.log("room 네임스페이스에 접속");

        socket.on('disconnect', () => {
            console.log("chat 네임스페이스 접속 해제");
        });

        // data를 보내온 방으로 data 전송
        socket.on('chat', (data) => {
            socket.to(data.room).emit(data);
        });

    });


};