window.addEventListener ("DOMContentLoaded", function(){
    const boxes = Array.from(document.querySelectorAll('.box'));
    const playerStatus = document.getElementById('player-status');
    const messageBoard = document.getElementById('message');
    const messageText= document.querySelector("data-message-text");
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

    let boardOptions = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = 'X';
    let isGameActive = false;
    
    initializeGame();

    /** to check for click event on boxes, restart button and to check player turns */
    function initializeGame() {
        boxes.forEach(box => box.addEventListener('click', checkClick));
        restartButton.addEventListener('click', resetGame);
        playerStatus.textContent = `${currentPlayer}'s turns`;
        isGameActive = true;
        
    };

    function checkClick(){
        /**create a local variable for index of boxes */
        const boxIndex = this.getAttribute("cellIndex");
    
        /**check if boxes are empty and will only update if nothing is there */
        if(boardOptions[boxIndex] != "" || !isGameActive){
            return
        }
        updateBoard(this, boxIndex);
       
        checkForWinner();
        changePlayer();  
    
    };

    function updateBoard(box, index){
      boardOptions[index] = currentPlayer;
      box.textContent = currentPlayer;
    };
    
    /**Function for swapping players  */
    function changePlayer() {
        currentPlayer = (currentPlayer === "X"? 'O' : 'X');
        playerStatus.textContent = `${currentPlayer}'s turns`;
    
    } ;
    
    function checkForWinner(){
        let roundWon = false;
    
        for(let i = 0; i <= winConditions.length; i++){
            const condition = winConditions[i];
            
            const cellA = boardOptions[condition[0]];
            const cellB = boardOptions[condition[1]];
            const cellC = boardOptions[condition[2]];
    
            if(cellA === "" || cellB === "" || cellC === ""){
                continue;
            }
            if(cellA == cellB && cellB == cellC){
                roundWon = true ;
                break;
            };
            if (roundWon){

                messageText.textContent = `${currentPlayer} Wins!`;
                isGameActive = false;
            }else if(!boardOptions.includes('')){ 
                messageText.textContent =`Game Draw`;
                isGameActive = false;

            }else{
                changePlayer();
                
            };   
            messageBoard.classList.remove('hide');

        };   
    
    };

    function resetGame(){
    
    };
});










