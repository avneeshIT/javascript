const namei ="avneesh"
const repocont=50

console.log(`hello my name is ${namei} and my current repo ${repocont}`)

const name = "hitesh" 
// primitive string
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') /*.  new String() creates a String object, not a primitive string.
It adds extra properties and methods — you saw them all in the console.
it wraps the primitve string in string obejct
 */

// console.log(gameName[0]);
// console.log(gameName.__proto__); to see the objects


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); 

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

 
const newString = gameName.substring(0, 4)
// isme negative value dene per ignore kr dega and zero se start krega
console.log(newString);

const anotherString = gameName.slice(-8, 4) 
// 8th index from the end or length-8=1
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
// it is a separator which return strings as array
// separatorn also comes with limit split(separator, limit)
