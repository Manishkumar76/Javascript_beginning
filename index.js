console.log("for loops implimentation-->\n")

console.log("for loop-->")
let arr = [1, 2, 3, 4, 5, 7, 5, 7, 96, 4, 7]
console.log("sr no.\tElement")
for (let i = 0; i < arr.length; i++) { console.log((i + 1) + "\t\t" + arr[i] + "\n") }

console.log("\nfor in loop--> ")
//creating an object 
const obj = {
  manish: 99,
  mohan: 98,
  rohan: 97,
  sachin: 93
}
//for in loop is useful for iterating over the object
for (let st in obj) {
  console.log("marks of " + st + "\'s are " + obj[st] + "\n")
}



//for of loop-->
for (let b of arr) {
  console.log(b + "\t")
}
console.log("\n for of loop in string-->\n")
for (let m of "MANISHKUMAR") {
  console.log(m + "\t")
}


// console.log("implimentation of Map-function\n")
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let value = 0,index = 0
// console.log(a.map(value, index))
