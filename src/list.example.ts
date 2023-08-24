import { List } from "./list";

const list = new List<string>();

list.push("Juan David");
list.push("Alex");
list.push("Dylan");
list.push("Brayan");

console.log("\n");
list.print();
console.log("\n");
list.pop();
console.log("\n");
list.print();




