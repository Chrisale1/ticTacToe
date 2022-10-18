window.addEventListener ("DOMContentLoaded", function(){
    const boxIndex = document.querySelectorAll("[data-box]");
    const boxes = Array.from(document.getElementsByClassName('box'))
    const playerStatus = document.getElementById('player-status');
    const messageBoard = document.getElementById('message');
    const messageText= document.querySelector("data-message-text");
    const restartButton = document.getElementById("reset")
    const boardOptions = [];
    const X_Player = 'X';
    const O_Player = 'O';
    let currentPlayer = X_Player;
    
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
    
    initializeGame();
    function initializeGame(){
        restartButton.addEventListener('click', resetGame);
        boxIndex.forEach(box =>{
        box.addEventListener('click', checkClick, {once:true})
    });

    }
    

    

    function checkClick(e){
        const id = e.target.id;
        
        if (!boardOptions[id]){
            
            boardOptions[id]=currentPlayer;
            e.target.innerText = currentPlayer;
            
            if(checkForWinner(currentPlayer)){
                messageBoard.innerText = `${currentPlayer} Wins!!!`;
                messageBoard.classList.remove('hide');
                return;
            }
            changePlayer();

            
        }
        
    
    }
    function changePlayer() {
        currentPlayer = currentPlayer === X_Player ? O_Player : X_Player;
        
        playerStatus.textContent = `${currentPlayer}'s turns`;
    
    } ;

    function checkForWinner(){
        
        for(const condition of winConditions){

            const cellA = boardOptions[condition[0]];
            const cellB = boardOptions[condition[1]];
            const cellC = boardOptions[condition[2]];

          
            if(cellA == cellB && cellB == cellC){
                return [cellA, cellB, cellC]
            };

            return;
        }

    }

    function resetGame(){
        boardOptions.forEach((boardOption, index) => {
            boardOptions[index] = "";

        });
        boxIndex.forEach(box => {
            box.innerText = "";
        })
        messageBoard.classList.add('hide');
        currentPlayer = X_Player;
    };
   
  
});
  /*let boardOptions = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = 'X';
    
    
    initializeGame();

    restartButton.addEventListener('click', initializeGame);

    /** to check for click event on boxes, restart button and to check player turns 
    function initializeGame() {
        box.forEach(box => box.addEventListener('click', checkClick));
        
        playerStatus.textContent = `${currentPlayer}'s turns`;
        isGameActive = true;
        
    };

    function checkClick(){
        /**create a local variable for index of boxes 
        
    
        /**check if boxes are empty and will only update if nothing is there 
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
    
    /**Function for swapping players  
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
    
    };*/









