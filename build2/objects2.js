const obj = new Object();
obj["id"] = "123b" ; 
obj["name"] = "Yogesh"
obj["isLoggedIn"] = false 
// console.log(obj);

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6 : "f"}

const obj4 = {obj1 , obj2}
// console.log(obj4);
 const obj5 = Object.assign({} , obj1 , obj2 , obj3);
 //console.log(obj5);

 const obj6 = {...obj1  , ...obj2 , ...obj3}
 // console.log(obj6);
  console.log(Object.keys(obj5));
 console.log(Object.values(obj5));
 console.log(Object.entries(obj5));
 console.log(obj5.hasOwnProperty('1'))
 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
const{coursename : name} = course 