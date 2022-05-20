import React, { useState } from 'react'

export const InputPhrase = ({socketIo}) => {

    const [phrase, setPhrase] = useState(``);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(phrase)
        socketIo.emit('phrase',phrase)
    }
    return (
        <form
        onSubmit={handleSubmit}
        >
            <input type="text"
            value={phrase}
            onChange={e=>setPhrase(e.target.value)}
            />
            <button type="submit">
                Submit
            </button>
        </form>
    )
}
