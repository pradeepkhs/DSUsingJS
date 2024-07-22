class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        // this.length = 1; // My Solution
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // this.length++; // My Solution
    }
    
    // My Solution
    // findMiddleNode() {
    //     const index = (this.length % 2 === 1) ? (this.length - 1) / 2 : (this.length / 2);
    //     console.log('index:');
    //     console.log(index);
    //     if (index < 0 || index >= this.length) return undefined;
    //     let temp = this.head;
    //     for(let i=0;i<index;i++) {
    //         temp = temp.next;
    //     }
    //     return temp;
    // }

    // Solution from Instructor
    findMiddleNode() {
        // Initialize slow and fast pointers at head
        let slow = this.head;
        let fast = this.head;
        // Iterate through the list
        while (fast !== null && fast.next !== null) {
            // Move slow pointer one step
            slow = slow.next;
            // Move fast pointer two steps
            fast = fast.next.next;
        }
        // Return middle node when fast reaches end
        return slow;
    }
}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    Middle node value of list 2: 4
*/
