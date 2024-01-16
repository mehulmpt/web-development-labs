import { exec, execFile } from "child_process";

// Implement execCommand function

// Implement execFileCommand function

// Sample Tests
// You can run the file using the "Run" button to see the outputs of your functions

console.log(await execCommand("ls"));

console.log(await execFileCommand("ls"));
console.log(await execFileCommand("ls", ["-la"]));
