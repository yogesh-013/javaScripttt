const obj = {
    username : "yogesh",
    price : 999 ,
    welcome : function(){
        console.log(`Welcome to my world... Mr. ${this.username}`)
        console.log(this);
    }
}
/* console.log(obj.welcome());
obj.username = "YOGESH"
console.log(obj.welcome()) */

//+++++++++++++++++++++++++++++++++//+++++++++++++++
 /* function ans(){
   let username =  "yogesh"
    console.log(this.username);
 } */
 const chai = function () {
    let username = "hitesh"
    console.log(this.username);
 }
chai()



const addtwo = (num1 , num2) => num1+ num2
console.log(addtwo(4 , 5))

console.log(((num1 , num2) => num1+ num2)(8 , 9 ))

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))