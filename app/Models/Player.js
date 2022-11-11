import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
  }


  get ListTemplate() {
    return `
    <div class="row" onclick ="app.playersController.setActive('${this.id}')">
    <div id="${this.id}" class="col-1"></div>
    <div class="col-4">${this.name}</div>
    <div class="col-3">highscore: ${this.score}</div>
  </div>
    `
  }

  get ActiveTemplate() {
    return `
    <div class="row justify-content-between card">
    <div class="col-2">${this.name}</div>
    <div class="col-2">SCORE: ${this.score}</div>
    </div>
    <div class="col-8">
    <div class="row card text-center" >
    <div class="col-10" id="fruit"></div>
    <form class="col-10" onsubmit="app.playersController.submitAnswer()">
      <input type="text" name="fruit">
    </form>
  </div>
    `
  }
  // get fruitTemplate() {
  //   return `
  // <div class="row card text-center">
  //   <div class="col-10">banana</div>
  //   <form class="col-10">
  //     <input type="text" name="fruit">
  //   </form>
  // </div>
  // `
  // }
  // onsubmit="app.playersController.enterFruit()"
}
