// Bài 14.a:
/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */
// For of không thể lặp qua các Key của một Objects còn for in thì có thể. 

let employees = [
  {name: 'Truong', age: 21},
  {name: 'Dai', age: 21},
  {name: 'Vi', age: 21}
];

let myDog = {
  name: "Miu",
  age: 2,
  weight: 5
};

for (let employee of employees) {
  console.log(employee.name, employee.age);
}
console.log("----------------------");
// wil return error
for (let dog of myDog) {
  console.log(dog.name, dog.age);
}
console.log("----------------------");

for (let key in myDog) {
  console.log(key, myDog[key]);
}

// bài 14.b:
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  let tich = 1;
  
  for (let arrNum of arr) {
    tich *= arrNum;
  }

  return tich;
}

console.log(multiply([2, 3, 4])); // expect: 24

// Bài 14.c:
/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};

for (let apart in apartment ) {
  console.log(apart);
  for (let bed in apartment.bedroom) {
    console.log(bed);
    for (let be in apartment.bedroom.bed) {
      console.log(be);
    }
  }
}

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */
 
// Bài 14.d:
  // Giả thiết: numbers là một array các số nguyên
  // Yêu cầu: 
  //	- trả về tổng các số, dùng vòng lặp for ... of
  //  - nếu array trống trả về 0

function sum(numbers) {
  let tong = 0;
  for (let num of numbers) {
    tong += num;
  }
  return tong;
}

console.log(sum(num = [1,2,3,4,5,6,7,8,9]));
// Bài 14.e:

  // viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
  // Tham số:
  //	- object: object cần kiểm tra
  //	- key: key cần kiểm tra xem có tồn tại trong object không
  // Return:
  //	- true nếu có tồn tại
  //	- false nếu không tồn tại
function has(object, key) {
  for (let check in object) {
    if (check === key)
    return true;
  }
  return false;
}

let myDog = {
  name: 'MeoMiu',
  age: 3,
  weight: 3
};
has(myDog, 'age');
