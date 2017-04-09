console.log('connected!');



//creating a variable to locate all the h2s
const whichDiv = document.querySelectorAll('.turn');
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
        if(turn % 2 === 0){  
            whichDiv[i].innerHTML = 'o';
        }
        //if the turn is odd, the else statement changes the h2s innerhtml to 'o' 
        else {
            whichDiv[i].innerHTML = 'x';
        }
        //removing the event listener once the h2 is clicked
        whichDiv[i].removeEventListener('click', enterPlay);
    }
}      



function clearText(){
    //locating all the text elements
    const allText = document.querySelectorAll('.text');
    console.log('clearing text');
    //creating a for loop that loops through all the text and replaces the innerhtml with an empty string
    for (let i = 0; i < allText.length; i++){
        allText[i].innerHTML = '';
    }
}


window.onload = function() {
    //setting an event listener to clear all the text when the restart button is clicked
     document.querySelector('#restart').addEventListener('click', clearText);
}