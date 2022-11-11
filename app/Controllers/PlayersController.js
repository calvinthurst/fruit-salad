import { appState } from "../AppState.js";
import { playersServices } from "../Services/PlayersServices.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPlayers() {
  let template = ''
  appState.players.forEach(p => template += p.ListTemplate)
  setHTML('players', template)
}
function _drawActive() {
  let active = appState.activePlayer
  console.log(active)
  setHTML(`active`, active.ActiveTemplate)
}
function _drawFruit() {
  let activeFruit = appState.activeFruit
  setHTML('fruit', activeFruit.fruitTemplate)
}


export class PlayersController {
  constructor() {
    console.log('hey');
    appState.on('players', _drawPlayers);
    appState.on('activePlayer', _drawActive);
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
    _drawFruit()
  }

  setActiveFruit() {
    playersServices.setActiveFruit()
  }

  randomFruit() {
    let rando = appState.fruits[Math.floor(Math.random() * appState.fruits.length)]
    // setActiveFruit(rando)
    appState.activeFruit = rando
    // rando = appState.activeFruit
    console.log(appState.activeFruit);
  }



}