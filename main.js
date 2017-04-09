console.log('connected!');


function startGame(){
    //creating a variable to locate all the h2s
    const whichDiv = document.querySelectorAll('.turn');
    const myBanner = document.getElementById('banner');
    let turn = 0;
    myBanner.innerHTML = 'x\'s turn';
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
            }
            //if the turn is odd, the else statement changes the h2s innerhtml to 'o' 
            //and changes the banner to the next player's turn
            else {
                myBanner.innerHTML = 'o\'s turn';
                whichDiv[i].innerHTML = 'x';
            }
            //removing the event listener once the h2 is clicked
            whichDiv[i].removeEventListener('click', enterPlay);
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