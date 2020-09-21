const { testMultipleArguments } = require('../utils/test');

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const len = s.length;
  if ( len === 0 ) return '';
  if ( numRows === 1 ) return s;
  const chars = s.split('');
  let converted = '';

  for ( let i = 0; i < numRows; i++ ) {
    // first and last row
    if (i === 0 || i === numRows - 1) {
      let nextInd = i;
      while ( nextInd < len ) {
        converted += chars[nextInd];
        nextInd += (2 * numRows - 2);
      }
    }
    // middle rows
    else {
      let nextInd = i;
      while ( nextInd < len ) {
        converted += chars[nextInd];
        const secondDistToNextRow = i * 2;
        const totalDist = (2 * numRows - 2);
        nextInd += totalDist - secondDistToNextRow;
        if ( nextInd < len ) {
          converted += chars[nextInd];
        }
        nextInd += secondDistToNextRow;
      }
    }
  }
  return converted;
};

testMultipleArguments(['paypalishiring', 3], convert);
testMultipleArguments(['paypalishiring', 4], convert);
testMultipleArguments(['paypalishiring', 5], convert);
testMultipleArguments(['paypalishiring', 6], convert);
testMultipleArguments(['paypalishiring', 7], convert);
testMultipleArguments(['A', 1], convert);
