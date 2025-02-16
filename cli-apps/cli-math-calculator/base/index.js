#!/usr/bin/env node

const process = require("node:process");

/**
 * Perform basic arithmetic operations
 *
 * @param {number[]} operator The numbers on which to perform operation
 * @param {string} operator The mathematical operator (+, -, *, /)
 * @returns The result of the operation
 */
function calculate(operator, numbers) {
  let answer = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    switch (operator) {
      case "+":
        answer = answer + numbers[i];
        break;

      case "-":
        answer = answer - numbers[i];
        break;

      case "/":
        answer = answer / numbers[i];
        break;

      case "*":
        answer = answer * numbers[i];
        break;
    }
  }

  return answer;
}

/**
 * Parses and evaluates chained operations
 *
 * @param {string[]} args Array of operands and operators
 * @returns The final result after evaluating all operations
 */
function evaluateChainedOperations(args) {}

/**
 * Prints the help message
 */
function printHelpMessage() {
  console.log(`Help`);
}

/**
 * Handles the arguments provided to the application by the user.
 *
 * @param {string[]} userArguments The arguments provided by the user
 */
function handleArguments(userArguments) {
  if (userArguments.length < 3) {
    printHelpMessage();
    return;
  }

  let operator;

  switch (userArguments[0]) {
    case "add":
      operator = "+";
      break;

    case "subtract":
      operator = "-";
      break;

    case "multiply":
      operator = "*";
      break;

    case "divide":
      operator = "/";
      break;

    default:
      printHelpMessage();
      return;
  }

  let numbers = [];
  for (let i = 1; i < userArguments.length; i++) {
    let parsedValue = parseFloat(userArguments[i]);
    if (isNaN(parsedValue)) {
      console.log("Error, the provided value is not a valid number");
      printHelpMessage();
      return;
    }
    numbers.push(parsedValue);
  }
  console.log(`The answer is: ${calculate(operator, numbers)}`);
}

handleArguments(process.argv.slice(2));
