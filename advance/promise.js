 //Do an async task
    // DB calls, cryptography, network

/* const promiseOne = new Promise(function(resolve , reject){
    setTimeout( function(){
        console.log("Async task completed ")
        resolve(32)
    },1000)
})
 promiseOne.then(function(a){
    console.log(a);
 })

 const promise1 = new Promise(function(resolve  , reject){
    setTimeout(function(){
          resolve({userName: "Yogesh Paneru" , id: 234 })
    }, 1000)
 })

 promise1.then(function(user){
  console.log(user)
 })

 const promise2  = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
              resolve({userName: "Yogesh Paneru" , id: 234})
        }else{
                reject('ERROR : Something went wrong')
        }
    } , 1000)
 })
 promise2.then(function(user){
     console.log(user);
 }).catch(function(error){
    console.log(error)
 })
    const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
   

async function comume(){
    try{
          const ans = await promise2 
          console.log(ans);
    }catch(error){
    console.log(error);
    }

}
comume() */

 async function getAllUsers(){
     try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users')
          
       const data = await response.json()

         console.log(data);
         console.log(typeof data);
     } catch (error) {
        console.log("E: ", error);
   }
 }

getAllUsers()

/* fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

Promise.all([promiseOne , promise1 , promise2]).then(function(a){
    console.log(a)
}).catch(function(error){
console.log(error);
}) */
