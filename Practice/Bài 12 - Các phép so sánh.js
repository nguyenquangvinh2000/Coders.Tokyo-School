// Bài 12.a:
var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
/*
Nguyên nhân của vấn đề này là do bản chất của Javascript có 2 cách khác nhau để so sánh bằng.
Chuối (string) hoặc số (number) khi so sánh thì sẽ so sánh với giá trị của chúng, trong khi các đối tượng khác như mảng (array), ngày tháng (date) và object thuần sẽ được so sánh qua tham chiếu. Việc so sánh bằng tham chiếu về cơ bản sẽ kiểm tra xem các đối tượng có được tham chiếu đến cùng một vị trí trong bộ nhớ hay không.
*/

//Bài 12.b:

var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
/*
Nguyên nhân của vấn đề này là do bản chất của Javascript có 2 cách khác nhau để so sánh bằng.
Chuối (string) hoặc số (number) khi so sánh thì sẽ so sánh với giá trị của chúng, trong khi các đối tượng khác như mảng (array), ngày tháng (date) và object thuần sẽ được so sánh qua tham chiếu. Việc so sánh bằng tham chiếu về cơ bản sẽ kiểm tra xem các đối tượng có được tham chiếu đến cùng một vị trí trong bộ nhớ hay không.
*/

// Bài 12.c:

var a = '1000';
var b = '10000';

console.log(a < b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.
/*
  So sánh chuỗi trong JS là thực hiện so sánh từng chữ cái.
1. Nếu chữ cái đầu tiên lớn hơn thì chuỗi lớn hơn,
nếu bằng nhau thì so sánh đến kí tự thứ hai, ba... 
Nếu cả hai chuỗi kết thúc ở một độ dài thì chúng bằng nhau.
Nếu không cùng độ dài thì chuỗi dài hơn lớn hơn
*/
