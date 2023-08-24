import Stack from "./stack";

const stack = new Stack<string>();
console.log("\r\n Stack:")
stack.push("Juan");
stack.push("Alex");
stack.push("Dylan");
console.log(stack.getDataResult());
console.log("Element removed: " + stack.pop()?.getData());
console.log(stack.getDataResult());
console.log("Element removed: " + stack.pop()?.getData());
console.log(stack.getDataResult());
console.log("Element removed: " + stack.pop()?.getData());
console.log(stack.getDataResult());
