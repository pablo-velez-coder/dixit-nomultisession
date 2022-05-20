import { useState } from 'react';
import { cards } from '../../data';
import styles from './styles.module.scss'

export const MainCards = ({mainCards, 
    user,
    winningCard,myOwnSelectedCard, socketIo, hasPlayed}) => {
    console.log(myOwnSelectedCard);
    const [selectedCard, setSelectedCard] = useState(null);
    const [hasWon, setHasWon] = useState(false);
    const handleClick = card =>{
        socketIo.emit('isPlayed',card.id)
        setSelectedCard(card)
        hasPlayed(card)

       if(card.cardId===winningCard.cardId){
            setHasWon(true)
            socketIo.emit('updatePoints',{
                userId: socketIo.id,
                points:3
            })
       }        
    }
const [message, setMessage] = useState(false);
  return <div className={styles.cards}>
            {
              !selectedCard ?  mainCards?.map(card=>(
                  <div>
                    <div
                    onMouseEnter={()=>myOwnSelectedCard!==card.cardId ? null:setMessage(true)}
                    onMouseLeave={()=>myOwnSelectedCard!==card.cardId ? null:setMessage(false)}
                    onClick={()=>myOwnSelectedCard===card.cardId ? null: handleClick(card)}
                    className={styles.cardsImage}
                    key={card.cardId}>
                        <img    
                        src={cards[card.cardId-1].image} alt='img' />
                       
                    </div>
                    {message && card.cardId=== myOwnSelectedCard&& 'No puedes elegir tu propia carta'}
                    </div>
                ))
            : <>
            <img alt='winner' src={cards[winningCard.cardId-1].image} />
            <h3>{hasWon ? 'Acertaste!! 3 puntos para ti': 'No acertaste :('}</h3> </>}
  </div>;
};
