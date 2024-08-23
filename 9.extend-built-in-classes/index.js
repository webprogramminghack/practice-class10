'use strict';

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 10, 30, 100);
// console.log(arr.isEmpty());

const filteredArr = arr.filter((item) => item > 10);
// console.log(filteredArr);

// console.log(filteredArr.isEmpty());
// console.log(arr.constructor === PowerArray);

{
  class PowerArray extends Array {
    double() {
      return this.map((item) => item * 2);
    }
  }

  const arr = new PowerArray(1, 2, 3, 4, 5);

  // console.log(arr.double());
}

{
  class ArrayCustomObjects extends Array {
    selectById(id) {
      return this.find((item) => item.id === id);
    }
  }

  const arrCustomObjects = new ArrayCustomObjects(
    {
      id: 1,
      name: ' John',
    },
    {
      id: 2,
      name: 'James',
    },
    {
      id: 3,
      name: 'Robert',
    }
  );

  const selectedObject = arrCustomObjects.selectById(3);
  console.log('selectedObject :>> ', selectedObject);
}
