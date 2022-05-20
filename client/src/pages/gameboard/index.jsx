import { useEffect,  useState } from 'react'
import { DashboardHeader } from '../../components/Header';
import { InputPhrase } from '../../components/inputphrase';
import { PointsGrid } from '../../components/pointsGrid';
import { SidebarChat } from '../../components/SidebarChat';
import {game} from '../../data'
import{YourCards} from '../../components/yourCards'
import { currentUser, generateRoundCards } from '../../utils';
import styles from './styles.module.scss'
import { MainCards } from '../../components/mainCards';

export const Gameboard = ({user,users, socketIo}) => {
    const [gameIndex, setGameIndex] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [currentStage, setCurrentStage] = useState(game[gameIndex]);
    const [playersHavePlayed, setPlayersHavePlayed] = useState([]);
    const [currentMainPlayer, setcurrentMainPlayer] = useState(currentUser(gameIndex,users));
    const [roundPhrase, setRoundPhrase] = useState('');
    const [yourCardsSet, setYourCardsSet] = useState([]);
    const [playingCards, setPlayingCards] = useState([]);
    const [winningCard, setWinningCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null)
    const [timer, setTimer] = useState(3);
    const [points, setPoints] = useState(0)
    const [myOwnSelectedCard, selectMyOwnSelectedCard] = useState(null);
    const [userHasPlayed, setUserHasSelectedWinningCard] = useState(null);

    useEffect(() => {
        socketIo?.emit('connection',user) 
    }, [user, socketIo]);

    useEffect(() => {
        users && setYourCardsSet(generateRoundCards(users.length))
    }, [users])

    useEffect(() => {
        if(gameIndex){
            setCurrentStage(game[gameIndex])
            setSelectedCard(null)
        }
    }, [gameIndex]);

    useEffect(() => {
       if(points>=19){
           setIsWon(true)
           setPoints(19)
       }
    }, [points])

const reset = () =>{
    setPoints(0)
    setGameIndex(0)
    setCurrentStage(game[0])
    setSelectedCard(null)
}

useEffect(() => {
    gameIndex && setcurrentMainPlayer(currentUser(gameIndex,users))
}, [gameIndex,users]);

useEffect(() => {
    if(playersHavePlayed.length===users.length-1){
       setTimeout(() => {
        socketIo.emit('cleanPlayersRound')
        setRoundPhrase('')
        setPlayingCards([])
        setPlayersHavePlayed([])
        setWinningCard(null)
        setUserHasSelectedWinningCard(null)
        setGameIndex(prev=>prev+1)
       }, 3000);
        
    }
}, [playersHavePlayed,socketIo, users.length]);

useEffect(() => {
    if(playersHavePlayed.length===users.length-1){
        setTimer(3)
        const interval = setInterval(() => {
            if (timer > 0) {
              setTimer(num => num - 1);
            }
          }, 1000);
          return () => clearInterval(interval);
    }
}, [playersHavePlayed,socketIo, users.length-1]);

useEffect(() => {
    socketIo&&  socketIo.on('playersHavePlayed',data=>setPlayersHavePlayed(data))
    socketIo && socketIo.on('getPhrase',data=>setRoundPhrase(data))
    socketIo && socketIo.on('getPlayingCards',data=>setPlayingCards(data))
    socketIo && socketIo.on('getWinningCard',data=>setWinningCard(data))
    socketIo && socketIo.on('users',data=>console.log(data))
    
}, [socketIo])


    return (
        <>
        <DashboardHeader
              users={users}
              gameIndex={gameIndex}
              game={game}
              currentMainPlayer={currentMainPlayer}
              />
        <div className={styles.gameContainer}>
            <SidebarChat socketIo={socketIo} user={user} />
          <div className={styles.dashboard}>
              

              <div>
            {currentMainPlayer?.id===socketIo.id && !roundPhrase && <InputPhrase 
            socketIo={socketIo}
            />}

       {roundPhrase && winningCard && playersHavePlayed.length< users.length-1 &&  <small>
                {playersHavePlayed.length} de {users.length-1} han jugado!
            </small>}
            <strong>
                {playersHavePlayed.length===users.length-1 && <span>
                    {timer}
                    </span>}
            </strong>
            {!roundPhrase ?
            (currentMainPlayer?.id===socketIo.id  ? 'Please write your guessing phrase':'Current main player is choosing a phrase. Wait...'):    ''
        }

{roundPhrase && <h1>{roundPhrase}</h1>}

{isWon && <h2>Felicitaciones, ganaste!!</h2>}
              </div>
              
          {(playingCards.length >= users.length &&
          currentMainPlayer.id!== socketIo.id &&
          winningCard && roundPhrase) &&  <MainCards
          user={user}
          myOwnSelectedCard={myOwnSelectedCard}
          hasPlayed={setUserHasSelectedWinningCard}
                socketIo={socketIo}
                winningCard={winningCard}
                mainCards={playingCards}
                />
}
          {playingCards.length < users.length &&  <YourCards
          myOwnSelectedCard={myOwnSelectedCard}
          selectMyOwnSelectedCard={selectMyOwnSelectedCard}
          winningCard={winningCard}
          roundPhrase={roundPhrase}
          currentMainPlayer={currentMainPlayer}
                socketIo={socketIo}
                yourCards={yourCardsSet}
                />
}
{(!winningCard && playingCards.length < users.length) ?
            (currentMainPlayer?.id===socketIo.id  ? 'Please choose you guessing card':'Current main player is choosing the guessing card. Wait...'):    ''
        }

{(winningCard && roundPhrase && playingCards.length < users.length)?
(currentMainPlayer?.id!==socketIo.id ? 'Choose a card to start playing...':'Wait for them to choose their playing card'):''
}

{
    playingCards.length >= users.length && currentMainPlayer.id=== socketIo.id &&
    'Now they are choosing between your card and their cards. Could do they possibly guess you card?' 
}
{
    playingCards.length >= users.length && currentMainPlayer.id!== socketIo.id && !userHasPlayed &&
    'Guess the winning card according to the phrase!' 
}
        <div className={styles.actions}>
        <p>{selectedCard ?
           selectedCard===currentStage.correctAnswer ?
           'Ganaste 3 puntos!':
           'No acertaste :(' :
            ''
            }</p>
            {((selectedCard && gameIndex === game.length-1)|| isWon) && <strong>Game over!</strong>}
        </div>

                <PointsGrid 
                users={users}
                key={user.id}
                user={user} />
         
          </div>
        </div>
        </>
    )
}
