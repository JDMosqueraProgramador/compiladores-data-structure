import { Node } from "./node";

export class Queue<T = string> {
  private firstNode: Node<T> | null = null;
  private lastNode: Node<T> | null = null;

  private queueSize: number = 0;

  private queueIsEmpty(): boolean {
    return this.firstNode === null;
  }

  private containOneElement(): boolean {
    return this.queueSize === 1;
  }

  printQueue() {
    if(this.queueIsEmpty()) {
      console.log("The queue is empty");
      return;
    }

    let aux = this.firstNode;

    for (let i = 0; i < this.queueSize; i++) {
      console.log(aux?.getData());
      aux = aux?.getNextNode() ?? null;
    }
  }

  enqueue(data: T) {
    const node = new Node<T>(data);

    if(this.queueIsEmpty()) {
      this.firstNode = node;
      this.lastNode = node;
    } else {
      this.lastNode?.setNextNode(node);
    }

    this.lastNode = node;

    this.queueSize++;
  }

  dequeue() {
    if(this.queueIsEmpty()) {
      console.log('The Queue is empty.');
      return;
    }
    
    if(this.containOneElement())
      this.lastNode = null;
  
    const dequeuedElementData = this.firstNode?.getData();
    this.firstNode = this.firstNode?.getNextNode() ?? null;

    this.queueSize--;
    console.log('Dequeued element: ', dequeuedElementData);
  }

}
