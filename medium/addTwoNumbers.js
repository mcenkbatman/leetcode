const { testMultipleArguments } = require('../utils/test');

/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let currentNode = new ListNode();
  let res = currentNode;
  let carry = 0;
  while ( l1 || l2 ) {
    const sumOfNodes = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sumOfNodes / 10);
    const digit = sumOfNodes % 10;
    currentNode.val = digit;
    if ( l1 ) l1 = l1.next;
    if ( l2 ) l2 = l2.next;
    if ( l1 || l2 ) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }
  if ( carry > 0 ) {
    currentNode.next = new ListNode(carry);
  }
  return res;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const input = [
  l1, l2
];

const r = testMultipleArguments(input, addTwoNumbers);