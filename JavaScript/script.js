/* JavaScript Array Methods🔥 */
/* Mutation👇 */

/* push - add the element to the end */
// let foodItems = ["Apple", "banana", "Mango", "Lichi"];
// foodItems.push("Orange");

// console.log(foodItems);

/* pop - delete from end & return */
// let arr = [1,2,3,4];
// arr.pop();

// console.log(arr);

/* toString - convert array to string */
// let elements = ["Gold", "Silver", "Bronze"];
// console.log(elements);
// console.log(elements.toString());

/* concat - joins multiple arrays & returns result */
// let marvelHeros = ["Thor", "Ironman", "Spiderman"];
// let dcHeros = ["Superman", "Batman"];

// let Heros = marvelHeros.concat(dcHeros);
// console.log(Heros);

/* unshift - add the first element */
// let array = ["Man", "Boy", "Women", "Girl"];
// array.unshift("Humans");

// console.log(array);

/* shift - delete the first element and return the value */
// let newarr = ["Humans", "Men", "Boy", "Women", "Girl"];
// let value = newarr.shift();

// console.log("Deleted", value);

/* slice - returns a piece of the array ) */
// let elem = ["Lion", "Liger", "Tiger", "Wolf"];
// let newElem = elem.slice(1, 3);

// console.log(newElem);

/* splice - change the original array (add, remove, replace) */
// splice(startIdx, delCount, newElem) - syntax
// let arr = [1,2,3,4,5,6,7];

// arr.splice(3, 2, 101, 102);

// Add element
// arr.splice(2, 0, 111, 112)

// Delete the element
// arr.splice(2, 2, 401, 402)

// Replace the element
// arr.splice(3, 1, 101)

// console.log(arr);

/* Practice Question🔥 */

/* Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflex" 

 - Remove the first company from the array
 - Remove Uber & Add Ola in its place
 - Add Amazon at the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflex"];

companies.shift();
console.log(companies);

companies.splice(1,1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
*/

/*********************************************************************************************/
/*********************************************************************************************/

/* JavaScript Array Methods🔥 */
/* Non-Mutation👇 */

/* forEach method - It is a function to execute for each element in the array.
  
  forEach Syntax👇

  array.forEach((element, index, array) => {
  // code to execute for each element
});

element: The current element being processed in the array.
index (optional): The index of the current element.
array (optional): The entire array being iterated.

************************************************************
// Practice Question for forEach
// For a given array of numbers, print the square of each value using the forEach loop.

/* 1st way👇
let nums = [55, 79, 99, 65];

nums.forEach((num) => {
    console.log(num*num);
})
*/

/* 2nd way👇
let squaNums = [2,3,4,5,6];

let calSquare = (squaNum) => {
    console.log(squaNum*squaNum);
}

squaNums.forEach(calSquare);
*/

/* map method - Creates a new array with the results of some operations. Tha value its callback returns are used to form new array.

// arr.map(callbackFun(value, index, array)) 

let nums = [3,4,5,6,7,8];

let doubleNum = nums.map((val) => {
  return val * 2;
})

console.log(doubleNum);
*/

/* filter method - Creates a new array of elements that give true for a condition/filter.

for eg: all even elements.
let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
  return val % 2 == 0;
})

console.log(evenArr);
console.log(arr);
*/

/* reduce method - Perform some operations & reduces the array to a single value. It returns that single value. 

// To calculate the total elements of the array and create a new array with the total number of elements.
let arr = [1,2,3,4,5]

let total = arr.reduce((prevVal, currVal) => {
  return prevVal + currVal;
});
console.log(total);


// find the largest number of the element in the array
let arr = [2,1,3,7,4,8,5];

const largArr = arr.reduce((prevVal, currVal) => {
  return prevVal > currVal ? prevVal : currVal;
});
console.log(largArr);
*/

/* find method - Finds the first element that matches a condition

let arr = [2,4,7,6,9,7,8];

let output = arr.find((val) => {
  return val == 7;
})
console.log(output);
*/

/* indexOf - Finds the index of a specific element

let arr = [2,4,5,6,8,9,1];

let newArr = arr.indexOf(5);
console.log("index = ",newArr);
*/

/* Practice Question🔥 
Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [89,92,87,94,90,77];

let largMarks = marks.filter((val) => {
  return val > 90;
});
console.log(largMarks);


Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.

// Take a number n as input from user. Create an array of numbers from 1 to n.
let n = prompt("Enter a number: ");

let arr = [];

for (let i=1; i<=n; i++){
  arr[i-1] = i;
}
console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.
let sumVal = arr.reduce((prevVal, currVal) => {   
  return prevVal + currVal;
})
console.log("sum value = ",sumVal);

// Use the reduce method to calculate product of all numbers in the array.
let factVal = arr.reduce((prevVal, currVal) => {
  return prevVal * currVal;
})
console.log("factorial value = ",factVal);
*/


/******************************************************************************************************/



/* JavaScript - Objects🌟 */
/* Objects are fundamental in JavaScript, providing a versatile way to store and manipulate data. They are especially useful when working with data fetched from APIs, which is often structured as objects

Syntax:

let object_name = {
    key_name : value,
    ...
}
*/


/******************************************************************************************************/



/* JavaScript - functions return🚀 */
/* In JavaScript, the return statement is used within a function to output a value back to wherever the function was called.  

function elem() {
  return "Hello JavaScript";
}

elem();
*/


/******************************************************************************************************/



/* JavaScript - Callbacks👨‍💻 */
/* Callbacks - A callback is a function passed as an argument to another function. It is executed after the completion of the asynchronous operation.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data has been fetch!", callback);
  }, 2000);
}
function processData() {
  console.log("processing data...");
}
fetchData(processData());


// Example of Callback Hell
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
*/


/******************************************************************************************************/



/* JavaScript - Promises🍵 
// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner and more structured way to handle asynchronous operations and avoid callback hell.

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}

//Promise Chain - Promise chaining is a common practice in JavaScript where you can chain multiple `.then()` calls to handle asynchronous operations in sequence. This makes the code easier to read and manage compared to nested callbacks.

// Promise Chain //

console.log("Getting data 1...");
getData(1)
  .then((res) => {
    console.log("Getting data 2...");
    return getData(2);
  })
  .then((res) => {
    console.log("Getting data 3...");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

  // Promise Chain //
  */


/******************************************************************************************************/



/* JavaScript - Async-Await🔥
//Async functions always returns a promise.
//Await pauses the execution of its surrounding async function until the promise is settled.

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("Getting data 1...");
  await getData(1);
  console.log("Getting data 2...");
  await getData(2);
  console.log("Getting data 3...");
  await getData(3);
};

/*
IIFE (Immediately Invoked Function Expression) is a function that is called immediately as soon as it is defined.

(async function() {
  console.log("Getting data 1...");
  await getData(1);
  console.log("Getting data 2...");
  await getData(2);
  console.log("Getting data 3...");
  await getData(3);
})();

*/


/******************************************************************************************************/



/* JavaScript - Fetch API💻 */
// Fetch API - The Fetch API provides an interface for fetching (sending / receiving) resources. It uses Request and Response objects. The Fetch() method is used to fetch a resource(data).

const URL = `https://cat-fact.herokuapp.com/facts`;
const btn = document.querySelector("#btn");
const factPara = document.querySelector("#fact")

const getFacts = async () => {
  console.log("Getting the data.....");
  let response = await fetch(URL);
  console.log(response);   // JSON format📁
  let data = await response.json();
  // console.log(data[0].text);       // json()
  factPara.innerText = data[0].text;
}

btn.addEventListener("click", getFacts);