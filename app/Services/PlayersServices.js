import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { EventEmitter } from "../Utils/EventEmitter.js"

class PlayersServices {
  submitAnswer(fruit) {
    console.log(fruit)
    let player = appState.activePlayer
    let activefruit = appState.activeFruit
    if (fruit = activefruit) {
      console.log('nice')
      player.score += 1
      console.log(player)
    } else console.log("try again")
  }

  createPlayer(formData) {
    console.log('service connected')
    const newPlayer = new Player(formData)
    appState.players = [...appState.players, newPlayer]

  }

  setActive(playerId) {
    const activePlayer = appState.players.find(p => p.id == playerId)
    appState.activePlayer = activePlayer
  }

}
export const playersServices = new PlayersServices()