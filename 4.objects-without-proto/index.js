'use strict';

const animal = {
  eats: true,
};

const rabbit = Object.create(animal);

// console.log(rabbit.eats);

// modern methods to get and set the prototype
// console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {});

// console.log(rabbit.eats);

{
  const animal = {
    eats: true,
  };

  const rabbit = Object.create(animal, {
    jumps: {
      value: true,
    },
  });

  // console.log(rabbit.jumps);
}

// plain object
{
  const obj = Object.create(null);
  console.log(obj.__proto__ === Object.prototype);
}
