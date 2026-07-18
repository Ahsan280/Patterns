function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
