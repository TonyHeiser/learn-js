function rangeRealization() {
  let range = {
    from: 1,
    to: 5,
  };
  // 1. вызов for..of сначала вызывает эту функцию
  range[Symbol.iterator] = function() {
    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором,
    // запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,

      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

  for (let num of range) {
    console.log(num);
  };
}

// rangeRealization();

/**Когда цикл for..of запускается, он вызывает этот метод один раз (или выдаёт ошибку, если метод не найден). Этот метод должен вернуть итератор – объект с методом next.
 * 
Дальше for..of работает только с этим возвращённым объектом.

Когда for..of хочет получить следующее значение, он вызывает метод next() этого объекта.

Результат вызова next() должен иметь вид {done: Boolean, value: any}, где done=true означает, что цикл завершён, в противном случае value содержит очередное значение. */


function manualCallOfIterator() {
  let str = "Helios";
  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
  };
}

// manualCallOfIterator();


function iterableObjectsAndPseudoArrays() {
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
  };

  for (let item of arrayLike) { // TypeError: arrayLike is not iterable
    console.log(item);
  }
};

// iterableObjectsAndPseudoArrays();


function iterableObjectsAndPseudoArrays2() {
  let arrayLike = {
    0: "World",
    1: "Hello",
    length: 2,
  }

  let trueArrae = Array.from(arrayLike);
  console.log(trueArrae.pop());
}

// iterableObjectsAndPseudoArrays2();


function showLastPropertyInArray() {
  let arr = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
  console.log(arr[arr.length - 1]);
}

// showLastPropertyInArray();


function arrFromSyntax() {
  // Array.from(obj[, mapFn, thisArg])

  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };

  let arr = Array.from(range, (num) => num * num);

  console.log(arr);

  let str = "𝒳😂";
  let chars = Array.from(str);
  console.log(chars[0]);
  console.log(chars[1]);
  console.log(chars.length);
}

// arrFromSyntax();


function sliceWithSurrogatePair() {
  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join("");
  }

  let str = "𝒳😂𩷶";
  console.log(slice(str, 1, 3));
  console.log(str.slice(1, 3));
  
}

// sliceWithSurrogatePair();


function iterable1() {
  const iterable = {
    items: [1, 2, 3],
    [Symbol.iterator]() {
      let index = 0;
      const items = this.items;
      return {
        next() {
          if (index < items.length) {
            return { done: false, value: items[index++] };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

  for (let value of iterable) {
    console.log(value);
  };

  const obj = {
    [Symbol.iterator]() {
      let count = 0;
      return {
        next() {
          if (count < 3) {
            return { value: count++, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

  for (let value of obj) {
    console.log(value);
  }
}


// iterable1();


function sub() {
  let countdown = {
    from: 3,
    to: 1,

    // [Symbol.iterator]() {
    //   return {
    //     next() {
    //       if (this.from >= this.to) {
    //         return { done: false, value: this.from-- } 
    //       } else {
    //         return { done: true }
    //       }
    //     }
    //   }
    // }

    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,

        next() {
          if (this.current >= this.last) {
            return { done: false, value: this.current-- }
          } else {
            return { done: true }
          }
        }
      }
    }
  };

  for (let n of countdown) {
    console.log(n);
  }
}

// sub();


function randomObjekt() {
  let apt = {
    numOfApt: 304,
    rooms: 3,
    bathrooms: 2,
    hasLight: true,

    [Symbol.iterator]() {
      const values = Object.entries(this);
      let i = 0;
      return {
        next() {
          if (i < values.length) return {value: values[i++], done: false};
          else return {done: true};
        }
      }
    }
  };

  for (let v of apt) {
    console.log(v); // [ 'numOfApt', 304 ], [ 'rooms', 3 ], [ 'bathrooms', 2 ], [ 'hasLight', true ]
  }

  let iter = [][Symbol.iterator]();
  console.log(iter.next()); // {value: undefined, done: true}
}

randomObjekt();