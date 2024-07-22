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

    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
myLinkedList.push(7);
console.log(myLinkedList);
const popNode = myLinkedList.pop();
console.log(popNode);
console.log(myLinkedList);
