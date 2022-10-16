document.addEventListener ("DOMContentLoaded", function(){
    const boxes = document.querySelectorAll('.box');
    const playerStatus=document.querySelector('#player-status');
    const restartButton = document.getElementById("reset")

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
   
});

function checkClick(){
    console.log("clicked");
}
/** to check for click event on boxes, restart button and to check player turns */
function initializeGame() {
    boxes.forEach(box =>{
        box.addEventListener('click', checkClick, {once:true})
    });
    restartButton.addEventListener('click', resetGame);
    playerStatus.textContent = `${currentPlayer}'s turns`;

    
}
function updateBoard(box, index){

}


function changePlayer() {
    
}

function checkForWinner(){

}

function resetGame(){
    
}