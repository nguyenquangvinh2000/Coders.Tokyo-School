// Bài 13.a:
/**
 * Dùng vòng lặp for hiển thị ra màn hình các số từ 0 đến 9
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Bài 13.b:
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: console.log(String.fromCharCode(97)) sẽ hiển thị ra màn hình chữ "a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

//Bài 13.c:

var a = [1, 2, 4, 8, 16];
/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */
const length1 = a.length;
for (let i = length1; i >= 0; i--) {
  console.log(a[i]);
}

//Bài 13.d:

var a = [1, 2, 3, 4, 5];
var b = [10, 20, 30];
/**
 * Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b. Kết quả mong muốn:
 * 10
 * 20
 * 30
 * ...
 * 20
 * 40
 * 60
 * ...
 * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
 */
const lengtha = a.length, lengthb = b.length;
for (let i = 0; i < lengtha; i++) {
  for (let j = 0; j < lengthb; j++) {
    console.log(a[i]*b[j]);
  }
  console.log("-----------------");
}

//Bài 13.e:

/**
 * Viết function trả về tích các số từ start đến end, không tính end 
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
  let tich = 1;
  if (start > end) {
    let flag;
    flag = start;
    start = end;
    end = flag;
  }
  for (let i = start; i < end; i++) {
    tich *= i;
  }
  return tich;
}

console.log(calculate(2,5));

//bai 13.f:

  // sử dụng vòng lặp for...of viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
  // Tham số:
  //  - array: mảng cần kiểm tra
  //  - value: giá trị cần kiểm tra xem có tồn tại trong array không
  // Return:
  //  - true nếu có tồn tại
  //  - false nếu không tồn tại
function has(array, value) {
  length1 = array.length;
  for (let i = 0; i < length1; i++) {
    if (array[i] === value)
      return true;
  }
  return false;
}

var array = [1,2,3,4,"5",6,7];
var value = 5;
console.log(has(array, value)); // false
