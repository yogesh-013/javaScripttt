const myArray = ["superman" , "wonder-woman" , "flash" , "spider-man"]
for (const name of myArray) {
    console.log(name);
}
const map = new Map();

    map.set('us' , "usa")
    map.set('in' , "india")
    map.set('can' , "canada")

for (const [key , value] of map) {
    console.log(`${key} + ${value}`)
}

// for -of does not work for objects we have to use for-in for that 