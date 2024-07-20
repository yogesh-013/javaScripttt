class User{
    constructor(username , id , isLoggedIn){
        this.username = username 
        this.id  = id 
        this.isLoggedIn = isLoggedIn 
    }
    encryptMessage(){
        console.log(`UserName : ${this.username}`);
    }
    toUpper(){
        console.log(`${this.username.toUpperCase()}`)
    }
}
//behind the scene 
 
function user(username , id , isLoggedIn){
  this.username = username 
  this.id = id 
  this.isLoggedIn = isLoggedIn
}
user.prototype.em = function(){
    return `${this.username}`
}
user.prototype.tu = function(){
    return `${this.username.toUpperCase()}`
}

