import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
export const LoginPage = ({loginUser}) => {
    const [name, setName] = useState('');

    const inputRef = useRef()

    const handleSubmit = e =>{
        e.preventDefault()
        loginUser(name)      
    }

    useEffect(() => {
      inputRef.current.focus()
    }, [])


    return (
        <div className={styles.login}>
          <div className={styles.container}>
          <h1>Dixit</h1>
            <h4>Login</h4>
            <form
            onSubmit={handleSubmit}
            >
                <input 
                ref={inputRef}
                value={name}
                onChange={e=>setName(e.target.value)}
                placeholder="Tu nombre" />
                <button
                type="submit"
                >Login</button>
            </form>
          </div>
        </div>
    )
}
