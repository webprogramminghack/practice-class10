'use strict';

// const obj = {
//   toString() {
//     return 'hello everyone';
//   },
// };
// alert(obj);

// console.log('obj :>> ', obj);

// const obj = new Object();

const obj = {};
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.toString === obj.__proto__.toString);
// console.log(obj.toString === Object.prototype.toString);

const arr = [1, 2, 3];

// console.log(arr.toString());

// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__);

function f() {}

// console.log(f.__proto__.__proto__ === Object.prototype);

// not recommended
String.prototype.show = function () {
  console.log(this);
};

'Hello'.show();

Function.prototype.defer = function (ms) {
  const f = this;
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(2000)(1, 2);

let user = {
  name: 'John',
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi = user.sayHi.defer(2000);
user.sayHi();
