/* const a = Math.PI
console.log(a);
Math.PI = 8 
console.log(Math.PI)
console.log(Object.getOwnPropertyDescriptor(Math , "PI"))
 */
const name = {
    naam : "yogesh" , 
    id : 43 ,
    isLoggedIn : true , 
    orderChai : function(){
        console.log("Shaadi")
    }
}
console.log(Object.getOwnPropertyDescriptor(name , "naam"))
Object.defineProperty(name , 'naam' , {
    writable : false ,
    enumerable : false 
})

for (const [key , value] of Object.entries(name)) {
    console.log(key , value )
}
