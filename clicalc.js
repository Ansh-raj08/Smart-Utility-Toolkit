
import process from "process";

const args = process.argv.slice(2);
const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
    process.exit(1);
}

let result;
if (operation === "add") {
    result = num1 + num2;
} else if (operation === "sub") {
    result = num1 - num2;
} else if (operation === "mul") {
    result = num1 * num2;
} else if (operation === "div") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
} else {
    result = "Unknown operation";
}

console.log(`Result: ${result}`);
