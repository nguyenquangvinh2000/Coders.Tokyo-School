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

/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
  // chỉ viết code ở dưới dòng này.
  delete student[prop];
  return student;
}

/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
  // viết code ở đây
  return Object.keys(obj).length;
}

/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
  // Your code here
  this.color = color;
  this.shape = shape;
  this.fill = fill;
  
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);

//Prototype
/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
    this.name = name;
    this.level = level;
}

Student.prototype.school = 'CodersX';

/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
  // Viết code ở đây
  this.diemToan = diemToan;
  this.diemLy   = diemLy;
  this.diemHoa  = diemHoa;
  
}

Student.prototype.average = function() {
  let total = (this.diemToan + this.diemHoa + this.diemLy);
  return Math.round(total/3);
  
}

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);

// Node modules
/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_extname_path
 */

// require module here!
let path = require('path');
function getExtension(fileName) {
  // your code here!
  return path.extname(fileName);
}

// Promise
// let fs = require('promise-fs');

// function onDone(song) {
//  console.log(song);
// }

// function onError(error) {
//  console.log(error);
// }

// function readFile(song) {
//  return fs.readFile(song, 'utf8');
// }

// readFile('song1.txt')
//   .then(onDone)
//   .then(() => {
//    return readFile('song2.txt');
//   })
//   .then(onDone)
//   .catch(onError);

var fs = require('fs');

function readFile(song) {
  return new Promise(function (resolve, reject) {
    fs.readFile(song, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}

readFile('song1.txt')
  .then(function (data) {
    console.log(data);
  })
  .then(function () {
    return readFile('song2.txt')
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.log(err);
  })

  // Promise all
  /**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios'); //Đối tượng promise.

let url1 = 'https://jsonplaceholder.typicode.com/todos/1';
let url2 = 'https://jsonplaceholder.typicode.com/todos/2';
let url3 = 'https://jsonplaceholder.typicode.com/todos/3';


Promise.all([
  axios.get(url1),
  axios.get(url2),
  axios.get(url3)
]).then((response) => {
  response.forEach((element) => {
    console.log(element.data);
  })
})
.catch((error) => {
  console.log(error)
});


// Xu li ngay thang. #date time

/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  let day = new Date(dateString).getDay();
  if (day === 0 || day === 6) {
      return true;
  }
  return false;
}

/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
// var fromDate = new Date('2019/10/17');
// var toDate = new Date('2018/10/21');
 
// function diff(fromDate, toDate) {
//     return toDate.getDate() - fromDate.getDate();

// }

/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2018/10/21');
 
function diff(fromDate, toDate) {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
  return (toDate - fromDate)/days;
}



/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
  return date.setDate(date.getDate() - n);
}

/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
 // viết code ở đây
 return Math.abs(new Date(a) - new Date(b));
}


// Design database libraly.
/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

var books = [
  { id: 0, name: 'Times', price: 1000 },
  { id: 1, name: 'The lake', price: 1200 },
  { id: 2, name: 'Harry potter', price: 3000 },
  { id: 3, name: 'Clean code', price: 500 },
  { id: 4, name: 'Art', price: 4000 }
];

// List user.
var users = [
  { id: 0, username: 'admin', age: 22, overdue: 0, level: 1 },
  { id: 1, username: 'duytruong', age: 21, overdue: 0, level: 0 },
  { id: 2, username: 'nguyenlan', age: 18, overdue: 0, level: 0 }
];

// Bảng sách cho mượn.
var borrows = [
  { 
    borrow_id: 0,
    user_id: 1,
    date_borrow: '2020/02/01', 
    due_date: '2020/02/05' 
  },
  { 
    borrow_id: 1,
    user_id: 1,
    date_borrow: '2020/02/02', 
    due_date: '2020/02/06' 
  },
  { 
    borrow_id: 2,
    user_id: 2,
    list_book_id: 2,
    date_borrow: '2020/02/01', 
    due_date: '2020/02/05' 
  },
];



// Danh sách sách đã mượn.
var borrowBooks = [
  { 
    list_book_id: 0,
    borrow_id: 0,
    book_id: 1,
    borrow_status: false,
    date_return: null
  },
  { 
    list_book_id: 1,
    borrow_id: 0,
    book_id: 2,
    borrow_status: false,
    date_return: null
  },
  { 
    list_book_id: 2,
    borrow_id: 1,
    book_id: 0,
    borrow_status: false,
    date_return: null
  },
  { 
    list_book_id: 3,
    borrow_id: 2,
    book_id: 4,
    borrow_status: true,
    date_return: '2020/02/04'
  }
];

// Lich su thue sach cua thu vien.
/**
 * @params {Number} id of the user
 * @return {string} name of the user
 */
function getUsername(user_id) {
    let userObject = users.find((user) => {
      return user.id === user_id;
    });
    return userObject.username;
}

/**
 * Lấy số lượng sách đã mượn.
 */
function getQuantity(borrow_id) {
  let listBooks = borrowBooks.filter((book) => {
    return book.borrow_id === borrow_id;
  });
  return listBooks.length;
}


// Hiển thị ra những người đã mượn, ngày mượn và số lượng sách mượn.

function showListBorrow() {
  return borrows.map((borrow) => {
    return { username: getUsername(borrow.user_id), date_borrow: borrow.date_borrow, quantity: getQuantity(borrow.borrow_id) }
  });
}
showListBorrow();

```