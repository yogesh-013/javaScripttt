function addNumbers(a , b){
 return a + b ; 
}
console.log(addNumbers(70 , 90))



function addToCart(...nums){
    return nums ; 
}
console.log(addToCart); 

function addToCart(...nums){
      console.log(nums);
}
addToCart(90 , 78 , 90 , 76)

function loggedUser(name){
    if(name === undefined){
        console.log("The user is not logged in...");
        return 
    }
    console.log(`${name} is logged in ....`)
}
loggedUser("Yogesh")

function object(obj){
      console.log(`The UserName is ${obj.username} and price is ${obj.price}`)
}
const obj1 = {
    username : "Yogesh" , 
    price : "90000"
}
object(obj1)


function add(num1 , num2){
    return num1 +  num2 
}

console.log(add())