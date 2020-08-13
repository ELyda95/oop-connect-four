import { Game } from './game.js';

let game = undefined;
const clickers = document.getElementById("click-targets");

function updateUI(){
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
        for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
            for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
                const square = document.querySelector(`#square-${rowIndex}-${columnIndex}`)
                square.innerHTML = "";
                const playerSpace = game.getTokenAt(rowIndex, columnIndex);
                if (playerSpace === 1) {
                    const token = document.createElement("div");
                    token.classList.add("black");
                    token.classList.add("token")
                    square.appendChild(token);
                } else if (playerSpace === 2) {
                    const token = document.createElement("div");
                    token.classList.add("red");
                    token.classList.add("token")
                    square.appendChild(token);
                }
            }
        }
        const currentPlayer = game.currentPlayer;
        if (currentPlayer === 1) {
            clickers.classList.add("black");
            clickers.classList.remove("red");
        } else {
            clickers.classList.remove("black");
            clickers.classList.add("red");
        }
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

    clickers.addEventListener("click", event => {
        const targetId = event.target.id;
        if (!targetId.startsWith("column-")) return;
        const columnIndex = Number.parseInt(targetId[targetId.length -1])
        game.playInColumn(columnIndex);

        updateUI();
    })

});