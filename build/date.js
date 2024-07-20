let myDate = new Date()
/* console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString()); */
let date = new Date(2023 , 9 , 21)
console.log(date.toLocaleString());
let date1 = new Date("01-08-2005")
console.log(date1);
let myTimeStamp = Date.now();
console.log(myTimeStamp);
let date2 = new Date();
console.log(date2.getMilliseconds());
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(
date2.toLocaleDateString('default' , {
    weekday : "long"
})
)
console.log(`The date on this date was ${date2.getDay()}`);
