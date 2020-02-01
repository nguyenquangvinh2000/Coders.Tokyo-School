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

// Array sort.
/**
 * Return a - b =>Từ bé đến lớn.
 * Return b - a =>Từ lớn đến bé.
 * Return 0 => Giữ nguyên.
*/

// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order);
function sortNumber(arr) {
  return arr.sort((a, b) => a - b);
}

//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
function sortNumber(arr) {
  return arr.sort((a, b) => b - a);
}

// Sort an array from shortest string to longest

function lengthSort(arr) {
  return arr.sort((a, b) => a.length - b.length)
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

// Sort an array alphabetically

function alphabetical(arr) {
  // Write code here...
  arr.sort();
  return arr;
}

// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  // Write code here...
  return arr.sort((a, b) => a.age - b.age);
}

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
  // Write code here...
  let result = students.sort((a, b) => b.score - a.score);
  result.length = 3;
  result = result.map((student) => student.name);
  return result;
}

// Math
// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  // your code here!
  return arr.map((number) => {
      return number % 2 === 0 ? Math.pow(number, 2) : number;
  })
};

/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  // your code here!
  let total = arr.reduce((acc, cur) => {
      return acc + cur;
  });
  return Math.round(total/arr.length);
}

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  // your code here
  return arr.map((number) => (number < 0) ? Math.abs(number) : number);
}

// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
  // your code here!
  let randomNum = Math.random() * 100; // From 0 to less than 100
  return Math.floor(randomNum + 1); // From 1 to 100
}

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    if (a < 0 || b < 0 || c < 0)
        return false;
    if (a*a + b*b > c*c && b*b + c*c > a*a && c*c + a*a > b*b)
        return true;
    return false;
}

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    if (a < 0 || b < 0 || c < 0)
        return false;
    a = Math.pow(a,2);
    b = Math.pow(b,2);
    c = Math.pow(c,2);
  if (a + b > c && b + c > a && c + a > b)
    return true;
  return false;
}

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0)
        return false;
    a = Math.pow(a,2);
    b = Math.pow(b,2);
    c = Math.pow(c,2);
    if (a + b >= c && b + c >= a && c + a >= b)
        return true;
    return false;
}

/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
  // your code here!
  return 2 * r * 3.14;
}
function acreageOfCircle(r) {
  //your code here!
  return Math.pow(r, 2) * 3.14;
}

/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  let result = [Math.sin(number), Math.cos(number), Math.tan(number)];
  return result.map((el) => el.toFixed(3));
}


```