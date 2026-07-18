class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    this.size = 1;
    this.tail = this.head;
  }

  insertAtHead(value) {
    const newHead = new Node(value, this.head);
    if (this.head.next === null) {
      this.tail = this.head;
    }
    this.head = newHead;
    this.size += 1;
  }

  insertAtTail(value) {
    const newTail = new Node(value, null);
    this.tail.next = newTail;
    this.tail = newTail;
    this.size += 1;
  }

  deleteWithValue(value) {
    let node = this.head;
    let prevNode = null;
    while (node.next) {
      if (node.value === value) {
        if (prevNode) {
          prevNode.next = node.next;
        } else {
          this.head = node.next;
        }
      }
      prevNode = node;
      node = node.next;
    }
  }
  find(value) {
    let node = this.head;
    while (node.next) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
  }

  printList() {
    this.printNode(this.head);
  }
  printNode(node) {
    console.log(node.value, "====>");
    if (node.next) {
      this.printNode(node.next);
    }
  }
}

const list = new LinkedList(23);

console.log(list);
list.insertAtHead(4);
list.insertAtHead(2);
console.log(list);
list.insertAtTail(1);
console.log(list);

list.printList();
console.log(list.find(2));

list.deleteWithValue(2);
list.printList();
