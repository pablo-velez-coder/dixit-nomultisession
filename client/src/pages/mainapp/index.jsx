import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { Gameboard } from '../gameboard'
import { LoginPage } from '../login'

export const MainApp = () => {
    const [user, setIsUserLogged] = useState(undefined)

    const [users, setUsers] = useState([])
    const [socketIo, setSocketIo] = useState(null)
    useEffect(() => {
        setSocketIo(io("http://localhost:5000"));
    }, []);
  
    useEffect(() => {
        user && socketIo.emit('newUserName',user)
        user && socketIo?.on('users',users=>setUsers(users))
       
    }, [user, socketIo]);

    return <>
    {(users.length>0 && users.length<3) && <h2>Va {users.length} jugadores. {3 - users.length} para empezar!</h2>}
    {(user && users.length>=3) ? <Gameboard
    socketIo={socketIo}
    users={users}
    user={user}
    /> : <LoginPage
    socketIo={socketIo}
    loginUser={setIsUserLogged}  />}
    </>
        
    
}
