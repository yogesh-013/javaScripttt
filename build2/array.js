
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    //  add elements to end of the array 
// myArr.push(7)
// myArr.pop()    // remove elements from last 

// myArr.unshift(9) add elements to start
// myArr.shift()     //   remove elements from start

// console.log(myArr.includes(9));     // boolean check the following condition is true or false 
// console.log(myArr.indexOf(3));      // tells the index of the element

const newArr = myArr.join()         //converts the array into string 

 console.log(myArr);
 console.log( newArr);


// slice, splice

console.log("A ", myArr);   // slice : prints the subarray but not change the array 

const myn1 = myArr.slice(1, 3)   

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // splice : prints the subarray including the last index but removes that part from the actual array 
console.log("C ", myArr);
console.log(myn2);