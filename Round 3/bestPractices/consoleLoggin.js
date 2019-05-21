console.log("Now Running the ConsoleLoggin.js file!");

function pressMe(){
    console.log("Just pressed the button!")
    pressCheck();
    func();
}

function pressCheck(){
    console.log("Press Check passed!")
}
pressMe();

const func = () => {
    console.log("Another one")
}
