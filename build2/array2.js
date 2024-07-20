const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // conactenate the whole array at last index

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concatenate the whole array at last index 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread all the elements of the array and add it into newer one 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // converts the array into a linear array 
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks if the "Hitesh" is array or not 
console.log(Array.from("Hitesh"))         // converts the string into array
console.log(Array.from({name: "hitesh"})) // outputs an empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // generates a newer array with variables