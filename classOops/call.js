function createUser(username){
       this.username = username 
       console.log("called")
}
function User(username , id , isLoggedIn){
    createUser.call(this , username);
    this.id = id 
    this.isLoggedIn =  isLoggedIn 
    return this 
}
 
const newUser = new User("yogesh" , 899 , true)
console.log(newUser)
