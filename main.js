console.log('let\'s play!');


function startGame(){
    // creating a variable to locate all the h2s and the banner
    const whichDiv = document.querySelectorAll('.turn');
    const myBanner = document.getElementById('banner');
    // setting the banner's innterhtml to indicate first player
    myBanner.innerHTML = 'x\'s turn';
    let turn = 0;
    

    // creating a for loop to loop through the h2s
    for (let i = 0; i < whichDiv.length; i += 1) { 
        // adding an eventlistener to each h2 that executes the enterplay function when clicked
        whichDiv[i].addEventListener('click', enterPlay);
        // the h2s need content to recognize the click
        whichDiv[i].innerHTML = '&hellip;';
        // declaring the enterplay function
        function enterPlay(){
            // incrementing the turn variable by 1
            turn += 1;
            /**creating an if statement to change the h2s innerhtml to 'o' if the turn is even
            and changes the banner to the next player's turn*/
            if(turn % 2 === 0){  
                myBanner.innerHTML = 'x\'s turn';
                whichDiv[i].innerHTML = 'o';
                whoWon();
            }
            /**if the turn is odd, the else statement changes the h2s innerhtml to 'o' 
            and changes the banner to the next player's turn*/
            else {
                myBanner.innerHTML = 'o\'s turn';
                whichDiv[i].innerHTML = 'x';
                whoWon();
            }
            // removing the event listener once the h2 is clicked
            whichDiv[i].removeEventListener('click', enterPlay);

            function whoWon(){
                // console.log('checking for winner');

                // locating each individual top h2
                const topLeft = document.getElementById('top-left').innerHTML;
                const topMiddle = document.getElementById('top-middle').innerHTML;
                const topRight = document.getElementById('top-right').innerHTML;
                // locating each individual center h2
                const centerLeft = document.getElementById('center-left').innerHTML;
                const centerMiddle = document.getElementById('center-middle').innerHTML;
                const centerRight = document.getElementById('center-right').innerHTML;
                // locating each individual bottom h2
                const bottomLeft = document.getElementById('bottom-left').innerHTML;
                const bottomMiddle = document.getElementById('bottom-middle').innerHTML;
                const bottomRight = document.getElementById('bottom-right').innerHTML;

                /**creating if statements that check for the possible win situations and change the banner. You have to state that they don't equal the '…' or it will include that as a win

                top horizontal win*/
                if(topLeft === topMiddle && topMiddle === topRight && topLeft !== '…'){
                     myBanner.innerHTML = `${topLeft} wins!`;
                     myBanner.style.color = '#f26419';
                } // center horizontal win
                else if(centerLeft === centerMiddle && centerMiddle === centerRight && centerLeft !== '…'){
                     myBanner.innerHTML = `${centerLeft} wins!`;
                     myBanner.style.color = '#f26419';
                } // bottom horizontal win
                else if(bottomLeft === bottomMiddle && bottomMiddle === bottomRight && bottomLeft !== '…'){
                     myBanner.innerHTML = `${bottomLeft} wins!`;
                     myBanner.style.color = '#f26419';
                } // left vertical win
                else if(topLeft === centerLeft && centerLeft === bottomLeft && topLeft !== '…'){
                     myBanner.innerHTML = `${bottomLeft} wins!`;
                     myBanner.style.color = '#f26419';
                } // center vertical win
                else if(topMiddle === centerMiddle && centerMiddle === bottomMiddle && topMiddle !== '…'){
                     myBanner.innerHTML = `${bottomMiddle} wins!`;
                     myBanner.style.color = '#f26419';
                } // right vertical win
                else if(topRight === centerRight && centerRight === bottomRight && topRight !== '…'){
                     myBanner.innerHTML = `${bottomRight} wins!`;
                     myBanner.style.color = '#f26419';
                } // left diagonal win
                else if(topLeft === centerMiddle && centerMiddle === bottomRight && topLeft !== '…'){
                     myBanner.innerHTML = `${topLeft} wins!`;
                     myBanner.style.color = '#f26419';
                } // right diagonal win
                else if(topRight === centerMiddle && centerMiddle === bottomLeft && topRight !== '…'){
                     myBanner.innerHTML = `${topRight} wins!`;
                     myBanner.style.color = '#f26419';
                } 
                else if (turn === 9){
                    myBanner.innerHTML = 'draw';
                } 
            } // end of whoWon function
        } // end of enterplay function
    } // end of for loop
} // end of startGame function   



const gameRestart = function (){
    console.log('restarting the game');
    // locating all the text elements
    const allDivs = document.querySelectorAll('.turn');
    const myBanner = document.getElementById('banner');
    myBanner.innerHTML = 'x\'s turn';
    myBanner.style.color = '#fff';
    startGame();
}


window.onload = function() {
    startGame();
    // setting an event listener to clear all the text when the restart button is clicked
     document.querySelector('#restart').addEventListener('click', gameRestart);
}