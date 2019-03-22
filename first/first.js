function dec(){
    let num = parseInt(document.getElementById('number').textContent);
    num -= 1;
    document.getElementById('number').value = num;
    document.getElementById('number').innerHTML = num;
}

function inc(){
    let num = parseInt(document.getElementById('number').textContent);
    num += 1;
    document.getElementById('number').value = num;
    document.getElementById('number').innerHTML = num;
}