class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            console.log('1');
            this.head = newNode;
            this.tail = newNode;
        } else {
            console.log('2');
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
myLinkedList.push(7);
console.log(myLinkedList);
