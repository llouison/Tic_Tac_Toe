console.log('let\'s play!');


function startGame(){
    //creating a variable to locate all the h2s and the banner
    const whichDiv = document.querySelectorAll('.turn');
    const myBanner = document.getElementById('banner');
    //setting the banner's innterhtml to indicate first player
    myBanner.innerHTML = 'x\'s turn';
    let turn = 0;
    

    //creating a for loop to loop through the h2s
    for (let i = 0; i < whichDiv.length; i++) { 
        //adding an eventlistener to each h2 that executes the enterplay function when clicked
        whichDiv[i].addEventListener('click', enterPlay);
        //the h2s need content to recognize the click
        whichDiv[i].innerHTML = '&hellip;';
        //declaring the enterplay function
        function enterPlay(){
            //incrementing the turn variable by 1
            turn ++;
            //creating an if statement to change the h2s innerhtml to 'o' if the turn is even
            //and changes the banner to the next player's turn
            if(turn % 2 === 0){  
                myBanner.innerHTML = 'x\'s turn';
                whichDiv[i].innerHTML = 'o';
                whoWon();
            }
            //if the turn is odd, the else statement changes the h2s innerhtml to 'o' 
            //and changes the banner to the next player's turn
            else {
                myBanner.innerHTML = 'o\'s turn';
                whichDiv[i].innerHTML = 'x';
                whoWon();
            }
            //removing the event listener once the h2 is clicked
            whichDiv[i].removeEventListener('click', enterPlay);

            function whoWon(){
                // console.log('checking for winner');
                //locating each individual top h2
                const topleft = document.getElementById('top-left').innerHTML;
                const topmiddle = document.getElementById('top-middle').innerHTML;
                const topright = document.getElementById('top-right').innerHTML;
                //locating each individual center h2
                const centerleft = document.getElementById('center-left').innerHTML;
                const centermiddle = document.getElementById('center-middle').innerHTML;
                const centerright = document.getElementById('center-right').innerHTML;
                //locating each individual bottom h2
                const bottomleft = document.getElementById('bottom-left').innerHTML;
                const bottommiddle = document.getElementById('bottom-middle').innerHTML;
                const bottomright = document.getElementById('bottom-right').innerHTML;

                //creating if statements that check for the possible win situations and change the banner. You have to state that they don't equal the '…' or it will include that as a win

                // top horizontal win
                if(topleft === topmiddle && topmiddle === topright && topleft !== '…'){
                     myBanner.innerHTML = `${topleft} wins!`;
                } //center horizontal win
                else if(centerleft === centermiddle && centermiddle === centerright && centerleft !== '…'){
                     myBanner.innerHTML = `${centerleft} wins!`;
                } //bottom horizontal win
                else if(bottomleft === bottommiddle && bottommiddle === bottomright && bottomleft !== '…'){
                     myBanner.innerHTML = `${bottomleft} wins!`;
                } //left vertical win
                else if(topleft === centerleft && centerleft === bottomleft && topleft !== '…'){
                     myBanner.innerHTML = `${bottomleft} wins!`;
                } //center vertical win
                else if(topmiddle === centermiddle && centermiddle === bottommiddle && topmiddle !== '…'){
                     myBanner.innerHTML = `${bottommiddle} wins!`;
                } //right vertical win
                else if(topright === centerright && centerright === bottomright && topright !== '…'){
                     myBanner.innerHTML = `${bottomright} wins!`;
                } //left diagonal win
                else if(topleft === centermiddle && centermiddle === bottomright && topleft !== '…'){
                     myBanner.innerHTML = `${topleft} wins!`;
                } //right diagonal win
                else if(topright === centermiddle && centermiddle === bottomleft && topright !== '…'){
                     myBanner.innerHTML = `${topright} wins!`;
                } 
                else if (turn === 9){
                    myBanner.innerHTML = 'draw';
                } 
            }//end of whoWon function
        } //end of enterplay function
    } //end of for loop
} //end of startGame function   



function gameRestart(){
    console.log('restarting the game');
    //locating all the text elements
    const allDivs = document.querySelectorAll('.turn');
    const myBanner = document.getElementById('banner');
    myBanner.innerHTML = 'x\'s turn';
    startGame();
}


window.onload = function() {
    startGame();
    //setting an event listener to clear all the text when the restart button is clicked
     document.querySelector('#restart').addEventListener('click', gameRestart);
}