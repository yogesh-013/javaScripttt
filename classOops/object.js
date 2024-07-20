/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/* function multiplyBy5(num){
  console.log(num*5);
}
multiplyBy5.power = 2 ; 
console.log(multiplyBy5.prototype)
console.log(multiplyBy5.power) */
//++++++++++++++++++++++++++++++++++++++++++++++++++++
function createUser(username, score){
    this.username = username
    this.score = score
}
 createUser.prototype.increment = function(){
    this.score++ ; 
 }
 createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`) 
 }



const yogi = new createUser("yogi" , 19)
yogi.increment()
const bhumi = createUser("bhumi" , 19)
bhumi.increment() // because of not having new in bhumi the prototype we defined outside the function is not considered ...
console.log(bhumi)
 

