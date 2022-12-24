console.log("String")
//string print
let name = "Manish";
console.log(name);
console.log("My name is" + name);
console.log("my name is ", name)

// replacing a string with other
console.log("--> Replacing a string with other string")
name.replace("Manish", "Kumar")
console.log("Replace String " + name);



//templete literals
let friend = "Lakshay"
let sentence = `i am ${name}`
console.log(sentence);
let sentence2 = `${friend} is a friend of ${name}`
console.log(sentence2)
//``-- Backic
//""--Double quotes
//'--single quotes
let friend2 = 'Tripathi'
let sentence3 = `${friend2} is a cute and ${friend} is a intelligent boy but ${name} have both qualities`
console.log(sentence3)


//Escape Sequence Characters -- \n,\t,\r,\f,\b,\v,\',\&,\`,\(,\),\[,\],\{,\},\!
//\n -- newline
console.log("--> Newline\n Manish\n tripathi \n lakshay \n Pawan")
//\t -- tab
console.log("--> Tab\n Name\tRollno\tSubject\tMarks")
