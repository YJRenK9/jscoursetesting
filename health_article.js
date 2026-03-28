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

// console.log(functionVar); // Throws ReferenceError b/c it only exists in the show function
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// var is accessible in global and block scopes
// if it's inside of a function, then it's only accessible in that function

// let and const are accessible in the scope they're defined in

{
    var vars = '^';
    let lets = 1;
    const tau = 6.28;

    console.log(vars, lets, tau);

    vars = "mars";
    lets = 0;
    // tau = 3.14; // cause error b/c u can't reassign constant variables

    console.log(vars, lets, tau);
}

// creates new variables of the same name due to being in a different scope (not constants)
// same outcome even when you specify var, let, or const
vars = "orange";
lets = -1;
tau = -6.28;

console.log(vars, lets, tau);


/*
    1) Variable scope overview:

        * Global scope: Variables declared outside any block or function have a global scope and are accessible throughout the entire script.

        * Block scope: Variables declared within curly braces {} have block scope, accessible only within that block.

        * Function scope: Variables declared within a function have function scope, limited to that function's block.

    2) Variable declaration and initialization:

        * Used var, let, and const to declare and initialize variables in different scopes: global, block, and function.

        * Demonstrated the behavior of these variables in respective scopes by accessing them outside their defined scope.

    3) Output and scope analysis:

        * Global variables were accessible everywhere in the script.

        * Block-scoped variables (inside {}) had limited accessibility, resulting in ReferenceErrors when accessed outside their blocks.

        * Function-scoped variables (inside a function) also led to ReferenceErrors when accessed outside the function.
*/