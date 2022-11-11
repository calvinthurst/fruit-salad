import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { EventEmitter } from "../Utils/EventEmitter.js"

class PlayersServices {
  createPlayer(formData) {
    console.log('service connected')
    const newPlayer = new Player(formData)
    appState.players = [...appState.players, newPlayer]

  }

  setActive(playerId) {
    const activePlayer = appState.players.find(p => p.id == playerId)
    appState.activePlayer = activePlayer
    console.log(appState.activePlayer)
  }
  setActiveFruit() {
    appState.fruits
  }

}
export const playersServices = new PlayersServices()