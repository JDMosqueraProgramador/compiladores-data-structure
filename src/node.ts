export class Node<T> {
  private nextNode: Node<T> | null = null;

  constructor(private data: T) { }

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNode: Node<T> | null) {
    this.nextNode = nextNode;
  }

}