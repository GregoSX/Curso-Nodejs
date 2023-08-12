const _ = require('lodash');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = _.chunk(arr, 2);
console.log(chunked); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]