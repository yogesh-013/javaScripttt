const user = {
    username : "hitesh" ,
    id : 234 ,
    signedIn : true ,
    getUserDetails : function(){
        console.log(this.getUserDetails)
        console.log(this.username)
    }
}
console.log(user.username)
console.log(user.getUserDetails())

function user(username , id , isLoggedIn){
  this.a = username ;
  this.b = id 
  this.c = true
  this.greeting = function(){
    console.log(`Welcome ${this.username}`)
  } 
  
}

const user1 = new user("yogesh" , 768 , true )
const user2 = new user("yogi" , 657 , false )
console.log(user1);
console.log(user1.constructor);
 
