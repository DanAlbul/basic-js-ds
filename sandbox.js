class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
	constructor(arr = null) {
		this.head = this.createNodeList(arr);
		this.size = arr.length || 0;
	}

	// create Linked list from an
	createNodeList(arr) {
    return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new Node(cur);
      node.next = acc;
      return node;
    }

    return new Node(cur);
  	}, null);
  }

	// Insert First Node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size += 1;
	}

	// Insert Last Node
	insertLast(data) {
		let current = this.head;
		let node = new Node(data);

		// Check if head is empty
		if(!this.head) {
			this.head = node
		} else {
			while(current) {
				if(!current.next) {
					current.next = node
					break;
				}
				current = current.next;
			}
		}
		this.size += 1
	}


	// Insert at Index
	insertAt(index, data) {
		// If index is out of range
		if(index > 0 && index > this.size) return;

		// If first index
		if(index === 0) {
			this.insertFirst(data);
			return;
		}

		const node = new Node(data)
		// Set current to First
		let current = this.head;
		let previous;
		let count = 0;

		while(count < index) {
			previous = current; // Node before Index
			count += 1;
			current = current.next; // Node after Index
		}

		node.next = current
		previous.next = node

		this.size += 1
	}

	// Get at Index
	getAt(index) {
		// If index is out of range
		if(index > 0 && index > this.size) return;

		let current = this.head;
		let count = 0;

		while(count < index) {
			if(count === index) {
				return current
			}
			current = current.next
			count += 1;
		}
		console.table(current)
	}

	// Remove at index
	removeAtIndex(index) {
		if(index > 0 && index > this.size) return;

		let current = this.head;
		let count = 0;
		let previous;

		if(index === 0) {
			this.head = current.next
		} else {
			while(count < index) {
				count += 1;
				previous = current;
				current = current.next;
			}
			previous.next = current.next
		}

		if(this.size > 0) this.size -= 1
	}

	// Filter by data
	filterByData(data) {
    while (this.head && this.head.data === data) {
      this.head = this.head.next;
      this.size -= 1;
    }

    let current = this.head;

    while (current && current.next) {
      if (current.next.data === data) {
          current.next = current.next.next;
          this.size -= 1;
      } else {
          current = current.next;
      }
    }
}


	// Print list data
	printListData() {
		let current = this.head
		while(current) {
			console.table(current)
			current = current.next
		}
	}
}


const ll = new LinkedList([1, 2, 8, 8, 4, 5]);

//ll.insertFirst(200)
//ll.insertFirst(100)
//ll.insertFirst(300)
//ll.insertFirst(500)
//ll.insertAt(4, 100)

//ll.printListData()

//ll.filterByData(8)
//ll.removeAtIndex(3)

//ll.printListData()




function createNodeList(arr) {
    return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new Node(cur);
      node.next = acc;
      return node;
    }

    return new Node(cur);
  	}, null);
  }

function removeKFromList(l, k) {
	while (l && l.data === k) {
    l = l.next;
  }

  let current = l;

  while (current && current.next) {
    if (current.next.data === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

	return l
}

const l = createNodeList([3, 1, 2, 3, 4, 5]), k = 3;

const res = removeKFromList(l, k)

console.log(res)
