/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

"use strict";

var rectangle = {
  width: 100,
  height: 50,
  getWidth: function() {
    return this.width;
  },
  getHeight: function() {
    return this.height;
  },
  getArea: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getWidth()); // 100
console.log(rectangle.getHeight()); // 50
console.log(rectangle.getArea()); // 5000
