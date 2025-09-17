const os = require('os'); // Built-in module
const path = require('path'); // Built-in module
const fs = require('fs'); // Built-in module
const http = require('http'); // Built-in module
const arithmetic = require('./Arithmetic.js')
const college = require('./college.js')
const maths = require('./maths.js')
//Global objects
global.message = 'Hello World'
// console.log(global)
// console.log(console)
// console.log(__dirname); // Current directory
// console.log(__filename); // Current file
// console.log(process); // Info about env where the program is being executed
// console.log(Buffer); // Used to handle binary data
console.log(module) // Info about current module

console.log(arithmetic)
console.log(arithmetic.add(5,3))
console.log(arithmetic.sub(5,3))
console.log(arithmetic.sub(5,3))


