'use strict';

{
  class Rabbit {}
  const rabbit = new Rabbit();

  // console.log(rabbit instanceof Rabbit);
}

{
  function Rabbit() {}

  // console.log(new Rabbit() instanceof Rabbit);
}

{
  let arr = [1, 2, 3];

  // console.log(arr instanceof Array);
  // console.log(arr instanceof Object);
}

{
  class Animal {}
  class Rabbit extends Animal {}

  const rabbit = new Rabbit();
  // console.log(rabbit instanceof Animal);

  // console.log(rabbit.__proto__ === Animal.prototype); // false
  // console.log(rabbit.__proto__.__proto__ === Animal.prototype); // true
}

{
  function Rabbit() {}
  const rabbit = new Rabbit();

  Rabbit.prototype = {};
  console.log(rabbit instanceof Rabbit);
}
