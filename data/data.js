function sendSecret(){
    let secret = document.getElementById('input').value;
    //Changes to data variable to equal the users input
    document.getElementById('bSpan').setAttribute('data-secret', secret);
    //Changes the CSS class the div is using 
    document.getElementById('dive').className = "blank";
    //Changes the text within the div
    document.getElementById('bSpan').innerHTML = "And now I'm Here"
    //prints user input to the screen
    console.log(secret);
    //Clears user input
    document.getElementById('input').value = "";
}

function newDiv(){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = '<h1>This is new</h1>';
    newDiv.className = 'blue';
    document.body.appendChild(newDiv);
}

//Create a new funciton that manipulates the DOM in some way (add text, pass data, "hide", etc)

function myFunct(){
    //Your Code Here
}