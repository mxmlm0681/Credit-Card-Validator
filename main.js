/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/PaySystem.js
function paySystem(numCard) {
  let returnPaySystem = false;
  if (numCard.search(/^(34|37)/) !== -1) {
    returnPaySystem = "american";
  } else if (numCard.search(/^(36|30[0-5]|3[89]|3095)/) !== -1) {
    returnPaySystem = "club";
  } else if (numCard.search(/^(6[45]|6011)/) !== -1) {
    returnPaySystem = "discover";
  } else if (numCard.search(/^(352[89]|35[3-8][0-9])/) !== -1) {
    returnPaySystem = "jcb";
  } else if (numCard.search(/^(5[1-5])/) !== -1) {
    returnPaySystem = "mastercard";
  } else if (numCard.search(/^(220[0-4])/) !== -1) {
    returnPaySystem = "mir";
  } else if (numCard.search(/^(4)/) !== -1) {
    returnPaySystem = "visa";
  }
  return returnPaySystem;
}
;// CONCATENATED MODULE: ./src/js/ValidateNum.js
function validateNum(numCard) {
  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  for (let i = numCard.length - 1; i >= 0; i -= 1) {
    const cDigit = numCard[i];
    nDigit = parseInt(cDigit, 10);
    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/ChoiceCardImg.js
function choiceCardImg(card) {
  const imgCards = document.getElementsByClassName("img-card");
  for (const item of imgCards) {
    item.style.opacity = 0.4;
  }
  if (card) {
    const activCard = document.getElementById(card);
    activCard.style.opacity = 1;
  }
}
;// CONCATENATED MODULE: ./src/js/ValidateCardWidget.js



class ValidateCardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.inputText = "";
  }
  static get markup() {
    return `
    <div id="card">
      <form class="valid-card">
        <div class="img-cards">
          <div class="img-card" id="american"></div>
          <div class="img-card" id="club"></div>
          <div class="img-card" id="discover"></div>
          <div class="img-card" id="jcb"></div>
          <div class="img-card" id="mastercard"></div>
          <div class="img-card" id="mir"></div>
          <div class="img-card" id="visa"></div>
        </div>
        <input type="text" id="input">
        <button id="btn-validate">Click to Validate</button>
      </form>
    </div>
    `;
  }
  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(".valid-card");
    this.inputText = this.parentEl.querySelector("[id=input]");
    submit.addEventListener("submit", event => this.onSubmt(event));
    this.inputText.addEventListener("keypress", event => this.onKeypress(event));
    this.inputText.addEventListener("input", () => this.onInput());
  }
  onSubmt(event) {
    event.preventDefault();
    this.validateCard(this.inputText.value);
  }
  onKeypress(event) {
    event.preventDefault();
    if (event.key.search(/\d/) !== -1) {
      this.inputText.value += event.key;
      choiceCardImg(paySystem(this.inputText.value));
    }
    if (event.key === "Enter") {
      this.validateCard(this.inputText.value);
    }
  }
  onInput() {
    choiceCardImg(paySystem(this.inputText.value));
  }
  validateCard(numCard) {
    if (numCard.length < 1 || !validateNum(numCard)) {
      this.inputText.className = "invalid";
      return;
    }
    this.inputText.className = "valid";
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const validateCardForm = new ValidateCardWidget(document.body);
validateCardForm.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;