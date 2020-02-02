var request = require('request');

/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
 */

/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */

function load(url) {
  return new Promise((resolve, reject) => {
    request(url, function(err, response, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

load('https://jsonplaceholder.typicode.com/todos/1')
  .then((body) => {
    console.log('Done!', body);
  })
  .catch((err) => {
    console.log(err);
  });