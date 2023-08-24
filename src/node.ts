export class Node<T> {
  private nextNode: Node<T>;

  constructor(private data: T) { }

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNode: Node<T>) {
    this.nextNode = nextNode;
  }

}