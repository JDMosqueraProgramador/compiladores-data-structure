import { Queue } from "./queue";

const queue = new Queue();

queue.enqueue('Juan');
queue.enqueue('Alex');
queue.enqueue('Dylan');

queue.printQueue();
console.log("\n");
queue.dequeue();
console.log("\n");
queue.printQueue();
console.log("\n");
queue.dequeue();
console.log("\n");
queue.printQueue();

queue.dequeue();
console.log("\n");
queue.printQueue();
