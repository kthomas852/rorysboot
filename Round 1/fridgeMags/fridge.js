const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//for loop to iterate through the letters array and create all the letter buttons
for(let i=0; i<letters.length; i++){
    let letterBtn = document.createElement('button');
    letterBtn.className = "letter-button letter letter-button-color";
    letterBtn.setAttribute('data-letter', letters[i]);
    letterBtn.setAttribute('onClick', 'alphbet(this)');
    letterBtn.innerHTML = letters[i];
    document.getElementById('buttons').appendChild(letterBtn);
}

//onClick listener posts magnet to fridge
function alphbet(elem) {
    let ltr = elem.dataset.letter;
    let fridgeMagnet = document.createElement('div');
    fridgeMagnet.className = "letter fridge-color";
    fridgeMagnet.innerHTML = ltr;
    document.getElementById('display').append(fridgeMagnet);
}

//onclick listener clears the fridge
function clearFridge(){
    document.getElementById('display').innerHTML = "";
    console.log('cleared')
}