'use strict';

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  // if the constructor is not provided, it is taken from the parent class
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit('White Rabbit');
// rabbit.run(5);
// rabbit.hide(5);

// overiding the method
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }

    stop() {
      // super.stop();
      this.hide();

      // setTimeout(() => {
      //   super.stop();
      // }, 1000);
    }
  }

  const rabbit = new Rabbit('White Rabbit');

  rabbit.run(5);
  rabbit.stop();
}

{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }

  class Rabbit extends Animal {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
  }

  const rabbit = new Rabbit('White Rabbit', 'grey');
}
