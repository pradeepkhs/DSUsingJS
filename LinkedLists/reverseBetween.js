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
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // WRITE THE REVERSEBETWEEN METHOD HERE // 
    // my solution
    reverseBetween1(m, n) {
        let temp = this.head;
        let tempMminus = new Node(0);
        let tempM = new Node(0);
        let tempNminus = new Node(0);
        let tempN = new Node(0);
        let tempNPlus = new Node(0);
        let count = 0;

        while (temp !== null) {
            if (count < this.length) {
                if (count === m - 1)
                    tempMminus = temp;
                if (count === m)
                    tempM = temp;
                if (count === n - 1)
                    tempNminus = temp;
                if (count === n) {
                    tempN = temp;
                    tempNPlus = temp.next;
                }

            }
            count++;
            temp = temp.next;
        }

        // console.log('All Temps');
        // console.log(tempMminus);
        // console.log(tempM);
        // console.log(tempNminus);
        // console.log(tempN);

        if (tempMminus.value !== 0)
            tempMminus.next = tempN;
        if (tempM.value !== tempNminus.value)
            tempN.next = tempM.next;
        else
            tempN.next = tempM;
        if (tempM.value !== tempNminus.value)
            tempNminus.next = tempM;
        tempM.next = tempNPlus;

        if (tempMminus.value === 0)
            this.head = tempN;
    }

    // Function to reverse nodes in a linked list between positions m and n (0-based index)
    //author solution
    reverseBetween(m, n) {
        // Check if the list is empty. If it is, no action is needed.
        if (this.head === null) return;

        // Create a dummy node. This is a common technique used in linked list problems
        // to simplify edge cases, like when modifying the head of the list.
        const dummy = new Node(0);

        // Link this dummy node to the head of the list.
        // Now, dummy acts as a precursor to the head node.
        dummy.next = this.head;

        // 'prev' will eventually point to the node just before the start of the reversal.
        // Initially, 'prev' is set to the dummy node.
        let prev = dummy;

        // Iterate to position 'prev' to the node just before where reversal begins.
        // Since indices are 0-based, this loop moves 'prev' 'm' nodes forward.
        for (let i = 0; i < m; i++) {
            prev = prev.next;
        }

        // 'current' points to the first node that will be reversed.
        // This is the mth node in the list (considering 0-based indexing).
        let current = prev.next;

        // The loop for the actual reversal of the segment between m and n.
        // It runs (n - m) times, moving each node in turn to the position after 'prev'.
        for (let i = 0; i < n - m; i++) {
            // 'temp' temporarily stores the next node in line to be moved.
            const temp = current.next;

            // Bypass 'temp' in the current positioning.
            current.next = temp.next;

            // Insert 'temp' between 'prev' and 'prev.next'.
            // This step effectively moves 'temp' to the front of the reversal segment.
            temp.next = prev.next;
            prev.next = temp;
        }

        // Update the head of the list if the head was part of the reversal.
        // This is where the dummy node becomes useful, as it simplifies this operation.
        this.head = dummy.next;
    }
}

// Helper function to create list from array
function createListFromArray(arr) {
    const ll = new LinkedList(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    return ll;
}

let myLinkedList = createListFromArray([1, 2, 3, 4, 5]);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 1;
const n = 2;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
