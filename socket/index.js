import { Server } from 'socket.io';

const io = new Server(5000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})

let users = [];

const adduser = (userId,socketId) => {
    !users.some(user => user.userId === userId) && users.push({userId,socketId});
}

const getUser = (userId) =>{
    return users.find(user => user.userId === userId)
}

const removeUser = (socketId) =>{
    users = users.filter(user => user.socketId !== socketId)
}


io.on('connection',(socket)=>{
    console.log('user connected');

    socket.on('adduser',(userId)=>{
        adduser(userId,socket.id);
        io.emit('getUsers',users)
    })

    socket.on('sendMessages',({senderId,reciverId,text})=>{
        const userSendTo = getUser(reciverId);
        io.to(userSendTo.socketId).emit('newMessage',{senderId,text})
    })  

    socket.on('disconnect',(socket)=>{
        console.log('disconnect');
        removeUser(socket.id)
        io.emit('getUsers',users)
    })
})





