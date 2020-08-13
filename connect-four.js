import { Game } from './game.js';

let game = undefined;

function updateUI(){
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }

}

window.addEventListener("DOMContentLoaded", () => {

    const playerOneInput = document.getElementById("player-1-name");
    const playerTwoInput = document.getElementById("player-2-name");
    const newGameBtn = document.getElementById("new-game");

    function enableBtn() {
        let playerOneContent = playerOneInput.value;
        let playerTwoContent = playerTwoInput.value;
        if (playerOneContent.length !== 0 && playerTwoContent.length !== 0){
            newGameBtn.disabled = false;
        }
     }
    playerOneInput.addEventListener("keyup", () => {
        enableBtn();
     });

    playerTwoInput.addEventListener("keyup", () => {
        enableBtn();
    });

    newGameBtn.addEventListener("click", () => {
        game = new Game(playerOneInput.value, playerTwoInput.value);
        playerOneInput.value = "";
        playerTwoInput.value = "";
        enableBtn();
        updateUI();
    });

});