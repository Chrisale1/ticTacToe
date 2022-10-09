document.addEventListener ("DOMContentLoaded", function(){
    const boxes = document.querySelectorAll('.box');
    const restartButton = document.getElementById("reset")

    boxes.forEach(box =>{
        box.addEventListener('click', checkClick, {once:true})
    })


    restartButton.addEventListener('click', resetGame)

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