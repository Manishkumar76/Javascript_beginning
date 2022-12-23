// Function without any peremeter-->
console.log("Function without any peremeter-->")
const function1 = () => {
  console.log("Hi,I am Manish Kumar.\n How Are You ?\n ")
}

function1();

//Function with any peremeter-->
console.log("Function with any peremeter-->")
function add(a, b, c) {
  return (a + b + c)
}
function Multi(a, b, c) {
  return (a * b * c)
}
function Div(a, b) {
  return (a / b)
}
function modulo(a, c) {
  return (a % c)
}

//other type of writting the fuctions-->
const sum = (x, y, z) => {
  return (x + y + z)

}

let a = 4
let b = 5
let c = 6
console.log("sum is " + sum(add(a, b, c), Multi(a, b, c), Div(a, b)))
console.log("Calling Addition Function --> ", add(a, b, c))
console.log("Calling multiplication Function --> ", Multi(a, b, c))
console.log("Calling Division Function --> ", Div(a, b))
console.log("Calling Modulas Function --> ", modulo(a, c))

