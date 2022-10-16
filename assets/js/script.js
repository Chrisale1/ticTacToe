document.addEventListener ("DOMContentLoaded", () => {
    const boxes = Array.from(document.querySelectorAll('.box'));
    const playerStatus = document.getElementById('player-status');
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
    let isGameActive = false;
    
    initializeGame();

    /** to check for click event on boxes, restart button and to check player turns */
    function initializeGame() {
        boxes.forEach(box => box.addEventListener('click', checkClick)
        );
        restartButton.addEventListener('click', resetGame);
        playerStatus.textContent = `${currentPlayer}'s turns`;
        isGameActive = true;
        
    };

    function checkClick(){
        /**create a local variable for index of boxes */
        const boxIndex = this.getAttribute("cellIndex");
    
        /**check if boxes are empty and will only update if nothing is there */
        if(board[boxIndex] != "" || !isGameActive){
            return
        }
        updateBoard(this, boxIndex);
       /* changePlayer();*/
        checkForWinner();
    
    };

    function updateBoard(box, index){
      board[index] = currentPlayer;
      box.textContent = currentPlayer;
    };
    
    /**Function for swapping players  */
    function changePlayer() {
        currentPlayer = (currentPlayer === "X"  ? 'O' : 'X');
        playerStatus.textContent = `${currentPlayer}'s turns`;
    
    } ;
    
   
});








function checkForWinner(){

}

function resetGame(){
    
}