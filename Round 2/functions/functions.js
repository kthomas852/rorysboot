//Everything you need to know about functions
//standard function definition
function logToScreen(){
    console.log("Function One!")
}

//ES6 Syntax - Arrow Function
const shortLog = () => {
    console.log("Function Two!")
}

//annonymous functions
//Annonymous Arrow Function
() => {/* stuff here */}

//Regular Annonymous Function
           //vvvvvvvvvvvvvvvvvvvvvvvvvvv
const func = function(){/*stuff here */}

//Function with a return
function funcWithReturn(){
  return 12
}
// console.log(funcWithReturn())

//Function with params
function funcWithParams(a, b){
  const c = a + b
  return c
}
// console.log(funcWithParams(2, 3))

//Higher Order Functions (HOF)
//Rules:
  //1. function that accepts a function as a parameter and then returns that same function
  //2. If the parameters are the same must return same result
     //Everytime. (No unexpected side effects )
function hof(num, func){
  return func(num, 100) * 10
}
// console.log(hof(23, funcWithParams))

//Scope
const w = 123
function scopator(w){
  let h = () => {
    let m = w + 12
    return m
  }
  return h()
}
// console.log(scopator(456))


function scopulate(w){
  let h = (num)=>{
    let m = num + 12
    return m
  }
  return h(w)
}
// console.log(scopulate(456))

//***Recursion***
function digital_root(n) {
  if(n<10){
    return n;
  }
  let final = 0;
  const arr = n.toString().split("");
  for(let x in arr){
    final = final + parseInt(arr[x]);
  }
  return digital_root(final);
}
// console.log(digital_root(54732))
const jake = {
  hofTwo: function(num, func){
    return func(num, 10)/2
  }
}
module.exports.hof = hof;
module.exports.jake = jake