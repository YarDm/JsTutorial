/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}
 
function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}
 
DoublyList.prototype.add = function(value) {
    let node = new Node(value);
 
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};
 
DoublyList.prototype.searchNodeAt = function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2-ой случай: верная позиция
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
 
DoublyList.prototype.remove = function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;
 
        // 2-ой случай: существует второй узел
        if (!this.head) {
            this.head.previous = null;
        // 2-ой случай: второго узла не существует
        } else {
            this.tail = null;
        }
 
    // 3-ий случай: последний узел удален
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4-ый случай: средний узел удален
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
 
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
 
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
 
    this._length--;
 
    return message.success;
};

DoublyList.prototype.show = function(){
    
    for (let count = 1; count <= this._length; count++){
      console.log(this.searchNodeAt(count).data);
    }
};

//complete method to summ two linked lists
DoublyList.prototype.sum = function(doubList){
  let result = new DoublyList();
  if (this._length === doubList._length){
      for (let i = 1; i<= this._length; i++){
          let newNode = this.searchNodeAt(i).data+doubList.searchNodeAt(i).data;
          result.add(newNode);
      }
      result.show();
  } else {
      console.log("введите равное количество значений в список");
  }
  
};


let dl1 = new DoublyList();
dl1.add(5);
dl1.add(7);
dl1.add(3);
//dl1.show();

let dl2 = new DoublyList();
dl2.add(6);
dl2.add(8);
dl2.add(2);
//dl2.show();

dl1.sum(dl2);

