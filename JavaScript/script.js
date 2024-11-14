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

/* forEach method
  
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


/* map method 
// arr.map(callbackFun(value, index, array)) 

let nums = [3,4,5,6,7,8];

let doubleNum = nums.map((val) => {
  return val * 2;
})

console.log(doubleNum);
*/


/* filter method */
let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
  return val % 2 == 0;
})

console.log(evenArr);
console.log(arr);