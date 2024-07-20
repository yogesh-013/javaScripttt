class User{
    constructor(username , id , isLoggedIn){
        this.username = username 
        this.id = id 
        this.isLoggedIn = isLoggedIn
    }

    get username(){
     return this._username.toUpperCase()
    }
    set username(value){
        this._username = value 
    }
    get id(){
        return String(this._id)
       }
       set id(value){
           this._id= value 
       }
}
const user = new User("yogesh" , 323 , true)
console.log(user.username)
console.log(typeof user.id)
//+++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++

const obj = {
    _name : "yogi",
    _id : 567 ,
    isLoggedIn : true ,  
      get name(){
         return this._name.toUpperCase()
      },

      set name(value){
         this._name = value
      }

}
console.log(obj.name)


