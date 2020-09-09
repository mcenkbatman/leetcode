const { test } = require('../utils/test');

function ListNode(val, next) {
  this.val = val===undefined ? -1 : val;
  this.next = next===undefined ? null : next;
}

// const printList = (list) => {
//   let newList = list;
//   while (newList) {
//     console.log(newList.val);
//     newList = newList.next;
//   }
// }

const removeUntilChar = (list, map, c) => {
  // console.log('gelen liste')
  // printList(list);
  let deletedCount = 0;
  while (list) {
    const currentChar = list.val;
    map[currentChar] = false;
    list = list.next;
    deletedCount++;
    if ( currentChar === c ) {
      break;
    }
  }
  // console.log('giden liste');
  // printList(list);
  // console.log({ list, deletedCount });
  return { list , deletedCount };
}
/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const chars = s.split('');
  const len = chars.length;
  if ( len === 0 ) return 0;
  let tempLongestList = new ListNode(chars[0]);
  let lastListNode = tempLongestList;
  let tempCharMap = {
    [chars[0]]: true,
  };
  let longest = 1;
  let tempLongest = 1;
  for ( let i = 1 ; i < len; i++ ) {
    const c = chars[i];
    lastListNode.next = new ListNode(c);
    lastListNode = lastListNode.next;
    tempLongest++;
    if ( tempCharMap[c] ) {
      const { deletedCount, list: newList } = removeUntilChar(tempLongestList, tempCharMap, c);
      tempLongestList = newList;
      tempLongest -= deletedCount;
    }
    tempCharMap[c] = true;

    if ( tempLongest > longest ) {
      longest = tempLongest;
    }
  }
  return longest;
};

test('abcabcbb', lengthOfLongestSubstring);
test('bbbbb', lengthOfLongestSubstring);
test('pwwkew', lengthOfLongestSubstring);
test('dvdf', lengthOfLongestSubstring);
test('dvdfx', lengthOfLongestSubstring);
test('qrsvbspk', lengthOfLongestSubstring);
test('aabaab!bb', lengthOfLongestSubstring);

// const dummy = (l) => {
//   l = l.next;
//   return {list: l};
// }

// let l = new ListNode(1);
// l.next = new ListNode(2);
// l.next.next = new ListNode(3);
// printList(l);
// const {list: l2} = dummy(l);
// l = l2;
// printList(l);

// const dummy = (map) => {
//   map['x'] = false;
// }

// let m = { 'x': true };
// console.log(m);
// dummy(m);
// console.log(m);
