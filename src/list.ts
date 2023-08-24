import { Node } from "./node";

export class List<T> {
  private firstNode: Node<T> | null = null;

  private listSize: number = 0;

  private isEmpty(): boolean {
    return this.firstNode === null;
  }

  push(data: T) {
    const node = new Node<T>(data);

    if(this.isEmpty()) {
      this.firstNode = node;
    } else {
      this.getLastNode()?.setNextNode(node);
      console.log(this.getLastNode());
    }

    this.listSize++;
  }

  print() {
    if(this.isEmpty()) {
      console.log("The list is empty");
      return null;
    }

    let aux = this.firstNode;

    for (let i = 0; i < this.listSize; i++) {
      if(aux) {
        console.log(aux.getData());
        aux = aux?.getNextNode();
      }
    }
  }

  pop(): void {
    if (this.isEmpty()) {
        console.log("The list is empty");
        return;
    }

    if (this.listSize === 1) {
        this.firstNode = null;
        this.listSize = 0;
        return;
    }

    let prevNode = null;
    let currentNode = this.firstNode;

    while (currentNode?.getNextNode() !== null) {
        prevNode = currentNode;
        currentNode = currentNode?.getNextNode() ?? null;
    }

    if (prevNode) {
        prevNode.setNextNode(null);
        this.listSize--;
    }
}


  private getLastNode(): Node<T> | null  {
    if(this.isEmpty()) {
      console.log("The list is empty");
      return null;
    }

    let aux = this.firstNode;
    for (let i = 0; i < this.listSize; i++) {
      if(aux)
        aux = aux?.getNextNode() ?? aux;
    }

    return aux;
  }
}