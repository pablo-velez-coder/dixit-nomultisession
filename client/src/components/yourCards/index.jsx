import styles from './styles.module.scss'

export const YourCards = ({yourCards,socketIo,currentMainPlayer,
    myOwnSelectedCard,
    selectMyOwnSelectedCard,
    roundPhrase, winningCard}) => {
 
    const handleClick = id=>{
        console.log('Escoge este id card',id);
        
        if(winningCard && roundPhrase && currentMainPlayer.id===socketIo.id){
            return;
        }

        if(currentMainPlayer.id===socketIo.id ) {
            socketIo.emit('winningCard',{
                cardId: id,
                userId: socketIo.id
            })
            socketIo.emit('playingCards',{
                cardId: id,
                userId: socketIo.id
            })
            selectMyOwnSelectedCard(id)
            return;
        }
        if(winningCard && roundPhrase && currentMainPlayer.id!==socketIo.id){
            selectMyOwnSelectedCard(id) 
            socketIo.emit('playingCards',{
                cardId: id,
                userId: socketIo.id
            })
        }


    }
    return (
        <div
        className={styles.yourCards}
        >
            {
                yourCards?.map(card=>(
                    <div
                    
                    onClick={()=>/* roundPhrase ?  */handleClick(card.id)/* :null */}
                    key={card.id}>
                        <img 
                        className={`${styles.img} ${myOwnSelectedCard===card.id && styles.selected}`}
                        src={card.image} alt='img' />
                    </div>
                ))
            }
        </div>
    )
}
