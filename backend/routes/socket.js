const { Server } = require('socket.io')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin: "https://chatapp-frontend-51aq.onrender.com",
        methods: ["GET","POST"],
    },
});


const socket_connnect = () => {io.on("connection",(socket) => {
    console.log(`User Connected: ${socket.id}`);

    // socket.on("send_message",(data) => {
    //     socket.broadcast.emit("receive_message",data)
    //     console.log(data)
    // })
    let room_no;
    socket.on("join_room",(data) => {
        socket.join(data.room)
        room_no = data.room
        console.log(`joined room no.: ${data.room}`)
    }) 
    
    socket.on("send_message",(data) => {
        // if(data!==null){room_no = data[0].room};
        console.log(data)
        socket.to(room_no).emit("receive_message",data);
        
    })
})}

module.exports = socket_connnect;