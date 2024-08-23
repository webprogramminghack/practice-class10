'use strict';

{
  const animal = {
    eats: true,
  };

  const rabbit = {
    jumps: true,
  };

  rabbit.__proto__ = animal;

  // console.log(rabbit.jumps);
  // console.log(rabbit.eats);

  // console.log('rabbit :>> ', rabbit);
}

{
  const animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  const rabbit = {
    jumps: true,
    __proto__: animal,
  };

  // rabbit.walk();
}

{
  const animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  const rabbit = {
    jumps: true,
    __proto__: animal,
  };

  const longEar = {
    earLength: 10,
    __proto__: rabbit,
  };

  // longEar.walk();

  // yang bisa jadi prototype hanyalah null dan object
  rabbit.__proto__ = 'Hey everyone';
  // rabbit.walk();

  // console.log('rabbit :>> ', rabbit);
}

// Write and delete don't use prototype
{
  const animal = {
    eats: true,
    walk() {},
  };

  const rabbit = {
    __proto__: animal,
  };

  rabbit.walk = function () {
    console.log('Rabbit! Bounce-bounce!');
  };

  // console.log('animal :>> ', animal);
  // console.log('rabbit :>> ', rabbit);

  delete rabbit.walk;

  // console.log('rabbit :>> ', rabbit);
}

{
  const animal = {
    walk() {
      if (!this.isSleeping) {
        console.log('I walk');
      }
    },
    sleep() {
      this.isSleeping = true;
    },
  };

  let rabbit = {
    name: 'White Rabbit',
    __proto__: animal,
  };

  // rabbit.sleep();

  // console.log(animal.isSleeping);
  // console.log(rabbit.isSleeping);
  // console.log('rabbit :>> ', rabbit);
}

// iteration
{
  const animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  const rabbit = {
    jumps: true,
    __proto__: animal,
  };

  // console.log(Object.keys(rabbit));

  // for (let key in rabbit) console.log(key);

  for (let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key);

    if (isOwn) {
      // console.log(`Our: ${key}`);
    } else {
      // console.log(`Inherited: ${key}`);
    }
  }
}

// studi kasus
{
  const hamster = {
    stomach: [],

    eat(food) {
      // this.stomach.push(food);
      this.stomach = [food];
    },
  };

  let speedy = {
    __proto__: hamster,
  };

  let lazy = {
    __proto__: hamster,
  };

  speedy.eat('apple');
  console.log('lazy :>> ', lazy);
  console.log('speedy :>> ', speedy);
}
