//Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet); // throws error b/c it's not within blockLet's scope

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
// runs perfectly
show();

console.log(functionVar); // Throws ReferenceError b/c it only exists in the show function
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

// var is accessible in global and block scopes
// if it's inside of a function, then it's only accessible in that function

// let and const are accessible in the scope they're defined in