function reverseBetween(head, left, right) {
  let dummy = new ListNode(0, head);
  let leftPrev = dummy;
  for (let i = 0; i < left - 1; i++) {
    leftPrev = leftPrev.next;
  }
  let prev = null;
  let current = leftPrev.next;
  let tail = current;
  for (let i = left; i <= right; i++) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  leftPrev.next = prev;
  tail.next = current;

  return dummy.next;
}
