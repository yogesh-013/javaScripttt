/* //-------------------------for-in -------------------------
const myArray = ["superman" , "wonder-woman" , "flash" , "spider-man" , "batman"]
const map = new Map();
map.set('en' , 'English')
map.set('us' , "usa")
map.set('in' , 'india')

const obj = new Object();
obj.name = "yogesh"
obj.branch = "ECE"
obj.roll_no = 221220074 
for (const key in obj) {
   console.log(key)
}
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const array = ["superman" , "batman" , "flash" , "spider-man" , "thor"]
array.forEach(function(val){
    console.log(`${val} is here !!!`)
})

array.forEach((val)=>{
    console.log(`${val}`)
})