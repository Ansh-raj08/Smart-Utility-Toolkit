// fileManager.js
import fs from "fs";

const path = "./sample.txt";

// 1. Create / Write File
fs.writeFileSync(path, "Hello, this is the initial content.\n");
console.log("1. File created successfully.");

// 2. Read File
const content = fs.readFileSync(path, "utf-8");
console.log("2. Read File Content:\n" + content);

// 3. Update / Append File
fs.appendFileSync(path, "Appended new line to the file.\n");
console.log("3. File updated successfully.");

// 4. Delete File
fs.unlinkSync(path);
console.log("4. File deleted successfully.");
