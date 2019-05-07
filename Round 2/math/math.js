// This is our math application

const addition = 4 + 6
console.log("Addition: " + addition)

const subtraction = 4 - 6
console.log("subtraction: " + subtraction)

const mutiplication = 4 * 6
console.log("Multiply: " + mutiplication)

const divition = 4/6
console.log("Divide: " + divition)

const modulus = 8%2
// console.log("Modulus: " + modulus)

const power = Math.pow(2, 5)
// console.log("Power: " + power)

//power done with a for loop function
function powerFunc(num, pow) {
    let final = 1
    for(let i=0; i<pow; i++){
        final = num * final
    }
    return final
}
// console.log("Function Power: " + powerFunc(2, 5))

//Random number generator
const max = 10
const random = Math.floor(Math.random() * Math.floor(max))
// console.log("Random #: " + random)

//Algebra
const a = 2
const b = 2
const triangle = Math.sqrt(a*a + b*b)
// console.log("The C of this triangle is " + triangle)

//If statements
const z = 6

// if(z === "5"){
//     console.log(" They are equal!!!")
// }else{
//     console.log("They are NOT equal...")
// }

// if(z == 5){
//     console.log(" They are equal!!!")
// }else{
//     console.log("They are NOT equal...")
// }

//Strings vs integers
// console.log("Strings vs ints: " + "5" + "3")
// console.log("Strings vs ints: " + 5 + 3)
// console.log("Strings vs ints: " + (5 + 3))

//Switch Statements
// switch(z){
//     case 10:
//         console.log("Equal to 10")
//         break;
//     case 5:   
//         console.log("Equal to 5")
//         break;
//     default:
//         console.log("Unrecognized Number")
//         break;
// }
