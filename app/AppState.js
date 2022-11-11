import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Player } from "./Models/Player.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Player.js').Player[]} */
  players = [
    new Player({
      name: 'calvin'
    }),
    new Player({
      name: 'jacob'
    }),
    new Player({
      name: 'zac'
    }),
    new Player({
      name: 'devin'
    })
  ]

  activePlayer = null

  fruits = ['pear', 'apple', 'banana']
  activeFruit = null


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
