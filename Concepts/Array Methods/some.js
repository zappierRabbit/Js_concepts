let ages = [12, 19, 20, 25, 56, 48, , 15, 16];

const checkAdult = (age) => age >= 18;

let a = ages.some(checkAdult);
console.log(a);
