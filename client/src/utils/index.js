import { cards } from "../data"

export function currentUser(round,users){
    const len = users.length
    return users[round%len]
  }

  export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  export const randomCard = () =>{
    return Math.floor(Math.random() * (101))
  }

  export function generateRoundCards(usersLength){
    if(usersLength){
      let mapSet = new Set()
      while(mapSet.size<usersLength){
        mapSet.add(cards[randomCard()])
      }
    return Array.from(mapSet)
    }
    return []
  } 

  export function shuffleCards(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  }