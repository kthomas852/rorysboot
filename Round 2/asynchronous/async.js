// An introduction to asynchronous functions, user inputs, dependencies and API calls
const axios = require('axios');
const inquirer = require('inquirer');

// Async and timeouts
// setTimeout(() => {
//     console.log("Intteruption!!!!")
// }, 500);
// console.log("one")
// setTimeout(() => {
//     console.log("Timeout!!!")
// }, 2000);
// console.log("Two")
// console.log("Three")

// User inputs
console.log('\033[2J');
inquirer.prompt([
    {
        type: "list",
        name: "selection",
        message: `What would you like to do?`,
        choices: ["1. add some numbers","2. Make API call", "3. say goodbye"]
    }
]).then((response)=>{
    console.log('\033[2J');
    switch(response.selection){
        case "1. add some numbers":
            console.log("5 + 27 = "+ (5+27))
            break;
        case "2. Make API call":
            // API call
            console.log('\033[2J');
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                console.log(res.data[3])
            })
            console.log("Initiated After API Call...")
            break;
        case "3. say goodbye":
        setTimeout(()=>{
            console.log("No No Wait don't Go!!!")
        }, 500)
        console.log("GoodBye!!!")
            break;
    }
})