import { Server } from "socket.io";

const io = new Server({ 
    cors:{
        origin: "http://localhost:3000"
    }
});


let users = []
let chat=[]
let playersHavePlayed = []
let currentPlayer ='pitah'
let currentPhrase = ''
let winningCard = null
let currentPlayingCards = []

io.on("connection", (socket) => {
    io.sockets.emit('playersHavePlayed',playersHavePlayed)
    io.sockets.emit('currentPlayer',currentPlayer)
    
    socket.on('updatePoints',(data)=>{
        const{points, userId} = data
        users = users.map(user=>{
            if(user.id === userId){
                return {
                    ...user,
                    points: user.points + points
                }
            }
            return user
        })
        io.sockets.emit('users', users)
    })

    socket.on('winningCard',(card)=>{
        winningCard = card
        io.sockets.emit('getWinningCard', winningCard)
    })
    socket.on('playingCards',(card)=>{
        currentPlayingCards.push(card)
        io.sockets.emit('getPlayingCards', currentPlayingCards)
    })

    socket.on('phrase',data=>{
        currentPhrase = data
        io.sockets.emit('getPhrase',currentPhrase)
    })

    socket.on('isPlayed',(user)=>{
        playersHavePlayed.push(user)
        io.sockets.emit('playersHavePlayed',playersHavePlayed)
    })
    socket.on('cleanPlayersRound',()=>{
        playersHavePlayed.length=0
        currentPhrase=''
        winningCard=null
        currentPlayingCards.length = 0
    })
    socket.on('sendMessage',(message)=>{
        chat.push(message)
        io.emit('allChats',chat)
    })
   socket.on('newUserName',(user)=> {
       const newUser = {
        id:socket.id,
        name:user,
        points:0
    }
       if(users.length===0){
        currentPlayer = newUser
       }
       users.push(newUser)
       io.emit('users',users)
   }) 
  socket.on('disconnect',()=>{
      console.log('desconectado el ',socket.id)
      users = users.filter(x=> x.id !== socket.id)
  })
});

io.listen(5000);