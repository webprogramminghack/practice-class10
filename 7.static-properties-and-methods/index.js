'use strict';

// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
// }

// User.staticMethod();

// Date.now();
// Array.from();
// Object.keys(instance);

// the static method usually related to the instance
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

const articles = [
  new Article('HTML', new Date(2020, 1, 1)),
  new Article('CSS', new Date(2019, 1, 1)),
  new Article('Javascript', new Date(2021, 1, 1)),
];

articles.sort(Article.compare);
// console.log('articles :>> ', articles);

// class Animal {
//   habitat() {
//     return 'Earth';
//   }
// }

// class Cat extends Animal {}

// console.log(Cat.habitat());
// console.log(Cat.__proto__ === Animal);

class Cat {
  static habitat() {
    return 'Earth';
  }
}

const cat = new Cat();
console.log('cat :>> ', cat);

Cat.habitat(); // class
cat.habitat(); // instance
