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
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    printValues() {
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
	
	// WRITE THE REMOVEDUPLICATES METHOD HERE // 
    // Implementation one:
    removeDuplicates1() {
        let temp = this.head;
        let tempNext = this.head.next;
        let tempValue = temp.value;
        let tempNextValue = (tempNext !== null ? tempNext.value : -1);
        const checkDuplicates = new Set([tempValue]);

        while (temp !== null) {
            tempValue = temp.value;
            tempNextValue = (tempNext !== null ? tempNext.value : -1);
            console.log('temp value: '+ tempValue);
            console.log('tempNext value: ' + tempNextValue);

            if(!checkDuplicates.has(tempNextValue) && tempNextValue !== -1) {
                console.log('Current and Next values are different');
                checkDuplicates.add(tempNextValue);
            } else if(checkDuplicates.has(tempNextValue) && tempNextValue !== -1) {
                console.log('Current and Next values are same');
                temp.next = temp !== null && temp.next !==null ? temp.next.next : null;
            }
            
            temp = temp.next;
            tempNext = temp !== null && temp.next !==null ? temp.next : null;
        }
    }

    // Implementation Two:
    removeDuplicates2() {
        let current = this.head;
        let nextObj = (current !== null ? current.next : null);
        let currentValue = (current !== null ? current.value : -1);
        let nextObjValue = (nextObj !== null ? nextObj.value : -1);
        const checkDuplicates = new Set([currentValue]);

        while (current !== null) {
            currentValue = current.value;
            nextObjValue = (nextObj !== null ? nextObj.value : -1);
            // console.log('current value: '+ currentValue);
            // console.log('nextObj value: ' + nextObjValue);

            if(checkDuplicates.has(nextObjValue)) {
                // console.log('Current and next values are same');
                current.next = nextObj.next;
                this.length--;
            } else {
                // console.log('current and next values are different');
                checkDuplicates.add(nextObjValue);
                current = current.next;
            }
            nextObj = nextObj !== null && nextObj.next !==null ? nextObj.next : null;
        }
    }
    
    // Solution by author
    removeDuplicates() {
        const values = new Set();
        let previous = null;
        let current = this.head;
        while (current !== null) {
            if (values.has(current.value)) {
                previous.next = current.next;
                this.length -= 1;
            } else {
                values.add(current.value);
                previous = current;
            }
            current = current.next;
        }
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

let ll1 = createListFromArray([1, 2, 3, 3, 4, 5, 5]);
let ll2 = createListFromArray([3, 3, 3]);

console.log("Original list:");
ll1.printValues();
ll1.removeDuplicates();
console.log("\nList after removing duplicates:");
ll1.printValues();
console.log(ll1.length);
console.log('--------------------------------------------')
console.log("Original list:");
ll2.printValues();
ll2.removeDuplicates();
console.log("\nList after removing duplicates:");
ll2.printValues();
console.log(ll2.length);
