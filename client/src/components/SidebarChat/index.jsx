import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

export const SidebarChat = ({user, socketIo}) => {

    const [message, setMessage] = useState('')
    const [chats, setChats] = useState([]);
    const chatsRef = useRef();
    
    const handleSubmit = e =>{
        e.preventDefault()
     socketIo.emit('sendMessage',{
         message,
         username:user,
         id:socketIo.id
     })
     setMessage('')
     socketIo.on('allChats', data=>setChats(data))
    
    }
    useEffect(() => {
        socketIo &&  socketIo.on('allChats', data=>setChats(data))
    }, [socketIo])

    return (
        <div className={styles.sidebar}>
            <div>
                <h2>Chat</h2>
            </div>
            <div
            ref={chatsRef}
            className={styles.sidebarMessages}>
               {
               chats?.map((chat,id)=>(
                   <div 
                   className={styles.sidebarMessagesChat}
                   key={id}>
                       <strong>
                           {chat.username+':  '}
                       </strong>
                       {`  `}
                      <p>
                      {`  `}
                      {chat.message}
                      </p>
                   </div>
               ))
               }
            </div>
            <div>
                <form
                onSubmit={handleSubmit}
                >
                    <input
                    value={message}
                    onChange={e=>setMessage(e.target.value)}
                    type="textarea"
                    placeholder="Manda un mensaje"
                    />
                    <button>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
