'use strict';

function Rabbit(name) {
  this.name = name;
}

// console.log(Rabbit.prototype.constructor === Rabbit);

// const rabbit = new Rabbit('White rabbit');

// const rabbit2 = new rabbit.constructor('Black Rabbit');

// console.log('rabbit2 :>> ', rabbit2);

const animal = {
  eats: 'true',
};

Rabbit.prototype = animal;

const rabbit = new Rabbit('White rabbit');

// console.log(rabbit.eats);

{
  function Rabbit() {}

  const rabbit = new Rabbit();

  // console.log(rabbit.__proto__.constructor === Rabbit);
  // console.log(rabbit.__proto__ === Rabbit.prototype);
}

{
  function Rabbit() {}

  // Rabbit.prototype = {
  //   jumps: true,
  // };

  Rabbit.prototype.jumps = true;

  const rabbit = new Rabbit();
  console.log(rabbit.constructor === Rabbit);
}

{
  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype.eat = function () {
    console.log(`${this.name} eats`);
  };

  const rabbit1 = new Rabbit('White Rabbit');
  const rabbit2 = new Rabbit('Black Rabbit');

  // rabbit1.eat();
  // rabbit2.eat();
}
