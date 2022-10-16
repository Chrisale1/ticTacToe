document.addEventListener ("DOMContentLoaded", function(){
    const boxes = document.querySelectorAll('.box');
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

   


   /* boxes.forEach(box =>{
        box.addEventListener('click', checkClick, {once:true})
    })


    restartButton.addEventListener('click', resetGame)*/

});

function checkClick(){
    console.log("clicked");
}

function resetGame() {
    
}
function endGame() {
    
}

function changePlayer() {
    
}

function checkForWinner(){

}

function checkForDraw(){
    
}