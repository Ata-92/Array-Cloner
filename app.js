// function cloner(arr) {
//   let cloneArray = arr;
//   console.log(cloneArray);
// }

// console.log(cloner([1, 2, [4, 0]]));


// let cloneArray;
// function cloner(arr) {
//   cloneArray = arr;
//   console.log(cloneArray);
// }

// console.log(cloner([1, 2, [4, 0]]));


// let cloneArray;
// const myFunction = function (arr) {
//   cloneArray = arr;
//   console.log(cloneArray);
// }

// console.log(myFunction([1, 2, [4, 0]]));

let cloneArray = [];
const myFunction = function (arr) {
  for (let num of arr) {
    cloneArray.push(num);
  }
}

console.log(myFunction([1, 2, [4, 0]]));
console.log(cloneArray);
