const array = [1,2,3,4,5,6,7,8,9]
const newArray  = array.map( (val)=> val*10 ).filter( (val)=> val>60 )
console.log(newArray)
const obj = {
   username : "yogesh ",
   id : 87 ,
   iiLoggedIn : true 
}
console.log(typeof Object.keys(obj));
for (const i of Object.keys(obj)) {
    console.log(i);
}