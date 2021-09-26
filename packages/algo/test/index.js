/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head === null) return head;
  let stk = [];
  search(head);
  return head;

  function search(cur) {
    while (cur.next && cur.child === null) {
      cur = cur.next;
    }
    if (cur.next === null) {
      let node = stk.pop();
      if (node) {
        cur.next = node;
        node.prev = cur;
        search(node);
      }
    } else {
      stk.push(cur.next);
      let child = cur.child;
      cur.child = null;
      cur.next = child;
      child.prev = cur;
      search(child);
    }
  }
};
