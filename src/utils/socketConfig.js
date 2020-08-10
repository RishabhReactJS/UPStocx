import io from 'socket.io-client';
import Config from './config';
const socket = io(`${Config.BASE_URL}watch`)


socket.on('connection', () => {
    console.log(socket.connected)
});


socket.on('disconnect', () => {
    console.log(socket.connected);
});

socket.emit('ping', () => {})

socket.emit('pong', () => {})

socket.subSocket = (cb) => {
    socket.emit('sub', {state: true} )

    socket.on('data', (data, callback) => {
        cb(null, data)
        const Acknowledgement = 1;
        callback(Acknowledgement);
    })

    socket.on('error', (err) => {
        cb(err)
    })
}

socket.unSubSocket = (cb) => {
    socket.emit('unsub', {state: false});
}

export default socket;