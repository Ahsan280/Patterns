function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
