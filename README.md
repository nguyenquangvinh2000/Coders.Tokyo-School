# Learn JS in Coders.Toky
***
```javascript

// Given an array of arrays, flatten them into a single array
/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  return arr.reduce((acc, currentValue) => {
  	// Nối mảng.
      return acc.concat(currentValue);
  }, []);
}


/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  return arr.reduce((acc, cur) => {
  	// Nếu chưa xuất hiện lần đầu thì gán bằng 1(acc[cur] === undefined -> acc[cur] = 1).
  	// Nếu đã xuất hiện thì cộng thêm 1.
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});
}

```