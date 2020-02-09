/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
var fruits = ['Apple', 'Banana'];

// Add to the end of an array
 // return new length of array
 let newLength = fruits.push('Orange');
newLength; // 3

// Remove to the end of array
// Return last
let last = fruits.pop();
last; // Orange

//Remove from the front of an array
// return first
let first = fruits.shift();
first;

//Add to the front of an array
let newLength3 = fruits.unshift('Strawberry');
newLength3; // return new lengt of array

fruits.push('Mango');
//Find the index of an item in the Array
let pos = fruits.indexOf("Banana");
pos; // return index of item

//Remove an item by index position
let removeItem = fruits.splice(pos,1);
removeItem;

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

var removedItems = vegetables.splice(2, 2);

console.log(vegetables);

removedItems;

// coppy an arrray

let arrayCoppy = vegetables.splice();
console.log(arrayCoppy);

// 15.b 
/** Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
 * 
 * Bắt đầu từ bài này các câu hỏi sẽ xuất hiện bằng tiếng Anh nhiều hơn.
 * Đây cũng là một kĩ năng không thể thiếu của develop vì: các nguồn tra cứu tốt đa phần là tiếng Anh, ví dụ như stackoverflow.com
*/

function first(arr, n) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(first([1, 2, 3], 2)); // expect [1, 2]
