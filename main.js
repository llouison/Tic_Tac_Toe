console.log('connected!');

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