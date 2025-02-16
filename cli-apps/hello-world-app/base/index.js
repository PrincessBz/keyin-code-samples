#!/usr/bin/env node

const process = require("node:process");
const arguments = process.argv.slice(2);
//node index.js --greet John
//Hello John!

let name = "World";

for (let i = 0; i < arguments.length; i++) {
  if (arguments[i] === "--greet") {
    name = arguments[i + 1];
  } else if (
    arguments[i] === "--help" ||
    arguments[i] === "-h" ||
    arguments[i] === "help"
  ) {
    console.log(`
        Usage:
        --greet <name>   Print 'Hello <name>'
        --help           Prints the help message

        `);
    return;
  }
}

if (name === undefined) {
  name = "World";
}

console.log(`Hello ${name}`);
