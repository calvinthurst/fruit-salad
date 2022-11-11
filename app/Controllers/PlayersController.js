import { appState } from "../AppState.js";
import { playersServices } from "../Services/PlayersServices.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { Player } from "../Models/Player.js"

function _drawPlayers() {
  let template = ''
  appState.players.forEach(p => template += p.ListTemplate)
  setHTML('players', template)
}
function _drawActive() {
  let active = appState.activePlayer
  console.log(active)
  setHTML('active', active.ActiveTemplate)
}
function _drawFruit() {
  setText('fruit', appState.activeFruit)

}


export class PlayersController {
  constructor() {
    console.log('hey');
    appState.on('players', _drawPlayers);
    appState.on('activePlayer', _drawActive);
    appState.on('activeFruit', _drawFruit)
    _drawPlayers()
  }

  createPlayer() {
    window.event.preventDefault()
    const form = window.event.target
    let formData = getFormData(form)
    console.log(formData)
    playersServices.createPlayer(formData)
    form.reset()
  }

  setActive(playerId) {
    playersServices.setActive(playerId)
    this.randomFruit()
    console.log(appState.activeFruit)
  }

  submitAnswer() {
    window.event.preventDefault()
    // const fruit = window.event.target
    // let fruitData = getFormData(fruit)
    playersServices.submitAnswer(fruit)
    this.randomFruit()
  }

  // setActiveFruit() {
  //   playersServices.setActiveFruit()
  // }

  randomFruit() {
    let rando = appState.fruits[Math.floor(Math.random() * appState.fruits.length)]
    appState.activeFruit = rando
  }



}