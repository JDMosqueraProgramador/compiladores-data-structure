import { Node } from "./node"

//Clase de PILA
 export default class Stack<T> {
   private topElement: Node<T> | null;
   private size: number;

   //AL iniciar, obviamente no tendrá nada.
   constructor() {
     this.topElement = null;
     this.size = 0;
   }

   //Cuando se le inserta un dato, se coloca como el "primer elemento".
   push(data: T) {
     let newNode = new Node<T>(data);
     if (!this.isEmpty()) {
       newNode.setNextNode(this.topElement!);
     }
     this.topElement = newNode;
     this.size++;
   }
   //Método que nos devuelve un arreglo de los elementos actuales de la pila, si no hay, devuelve un arreglo vacío.
   getDataResult() {
     if (!this.isEmpty()) {
       let aux = this.topElement;
       let result:T[] = [];
       for (let index = 0; index < this.size; index++) {
         result.push(aux!.getData());
         aux = aux!.getNextNode();
       }
       return result;
     }
     return [];
   }

   isEmpty() {
     return this.size === 0;
   }

   //Método que permite quitar el "primer elemento", haciendo que el siguiente sea el nuevo "primer elemento". Si no hay nada, devuelve un mensaje alertando que ya estaba vacía
   pop() {
     if (!this.isEmpty()) {

       this.topElement = this.topElement!.getNextNode();
       this.size--;
       return;
     }
     console.log("The stack is empty");
   }
 }
