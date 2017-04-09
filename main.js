console.log('connected!');

//creating a variable to locate all the h2s
const whichDiv = document.querySelectorAll('.turn');
//creating a for loop to loop through the h2s
for (let i = 0; i < whichDiv.length; i++) {
    console.log(whichDiv[i]);
    //adding an eventlistener to each h2 that executes the enterplay function when clicked
    whichDiv[i].addEventListener('click', enterPlay);
    //the h2s need content to recognize the click. Adding z to their innerhtml.
    whichDiv[i].innerHTML = 'z';
    //declaring the enterplay function
    function enterPlay(){
            //calling the whosTurn function
            whosTurn();
            console.log(i);
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