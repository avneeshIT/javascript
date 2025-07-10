// datako kistrah store krte hai and kis trah access krte hai uske basis per data ka categorization kiya gya hai
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions


// non primtive the return type object hi aata hai
// array=>object
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// agr hum function ka type of kre to function hi aaega but vo object function hota hai

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//
// ++++++++++++++++++++++++ memory
 // stack(primitive) call by value          heap(non primitive)call by refrence
  let myyoutube ="hellojaihind"

  let anothername = myyoutube
  anothername= "chaicoffee"
  console.log(myyoutube)
  console.log(anothername)


  let userOne = {
    email: "avneesh@gmail.com",
    upi:"userybl"
    
  }
  let userTwo=userOne

  userTwo.email= "avanish@gmail.com"

  console.log(userOne.email)
    console.log(userTwo.email)

  