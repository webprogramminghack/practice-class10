'use strict';

{
  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function () {
    console.log(this.name);
  };

  let user = new User('John');
  // user.sayHi();
}

// using class
// syntactic sugar
{
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name);
    }
  }

  const user = new User('John');
  // user.sayHi();
  // console.log(user);

  // console.log(typeof User);

  // console.log(User === User.prototype.constructor);
}

// not just a syntactic sugar
{
  class User {
    constructor() {}
  }

  // User();

  // console.log(User);
}

// class expression
{
  const User = class {
    sayHi() {
      console.log('Hello');
    }
  };

  // new User().sayHi();
}

// utilizing lexical environment
{
  function makeClass(phrase) {
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }

  const User = makeClass('Hello');
  // new User().sayHi();
}

// just like literal objects, classes may include getters/setters
{
  class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        console.log('Name is too short');
        return;
      }

      this._name = value;
    }
  }

  let user = new User('John');

  // console.log(user.name);
}

// class fields
{
  class User {
    name = 'John';

    sayHi() {
      console.log(`Hello, ${this.name}`);
    }
  }

  const user = new User('John');
  // user.sayHi();
}

// const button = {
//   value: 'hello',
//   click: () => {
//     console.log(this);
//   },
// };

// button.click();

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    // this will take 'this' from surrounding context
    // the 'this' is lexically bound
    console.log(this.value);
  };
}

let button = new Button('hello');
// button.click();

// setTimeout(button.click, 2000);

// too late to do this
// button.__proto__.test = () => {
//   console.log(this.value);
// };

// button.test();

const obj = {
  value: 'hey guys',
};

obj.click = button.click;
// obj.click();

// contoh lain
class Person {
  constructor() {
    this.friends = ['John', 'Pete', 'Alice'];
  }
  getFriends = () => this.friends.forEach((friend) => console.log(friend));
}

const person = new Person();
person.getFriends();
