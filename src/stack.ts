import { Node } from "./node"

 

 class Stack<T> {
  private topElement:Node<T>| null
  private size:number

  constructor(){
    this.topElement = null
    this.size = 0
  }

  push(data:any){
      let newNode = new Node<T>(data)
      if(!this.isEmpty){
        newNode.setNextNode(this.topElement!)
      }
      this.topElement = newNode
      this.size++
  }
  getDataResult(){
    if(!this.isEmpty){
      let aux = this.topElement
      let result = []
      for (let index = 0; index < this.size; index++) {
        result.push(aux!.getData())
        aux = aux!.getNextNode()
      }
      return result
    }
    return []
  }

  isEmpty(){
    return this.size===0
  }
}
