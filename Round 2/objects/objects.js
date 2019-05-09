//Objects and Arrays Tutorial

const objOne = {
    id: 66237288223,
    firstName: "James",
    lastName: "Doe",
    phone: "505-638-9283",
    address: {
        streetNum: "4000",
        streetName: "Palo Duro",
        city: "ABQ",
        state: "NM",
        zip: "87110"
    },
    friends: ["MT", "Rory", "Chris", "Mark"],
    func: ()=>{console.log("Hi!!!")}
} 

const arrayOfObj = [{
    pet: "cat",
    food: "chow"
}, 
{
    restaurant: "Burger King",
    store: "Target"
}, 
{objOne}]

// console.log(objOne)
// console.log(...arrayOfObj)

// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/users/1')
// .then(res=>console.log(res.data))

//Try on your own:
//1. console.log the phone number in objOne
//2. console.log the zip code in objOne
//3. console.log the friend "Chris" in objOne
//4. console log the company "catchPhrase" in the axios response

//Link to reference material
//https://jsonplaceholder.typicode.com/