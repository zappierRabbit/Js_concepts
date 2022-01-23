const items = [
    {name:'rice', price: 10},
    {name:'book', price: 15},
    {name:'chicken', price: 30},
    {name:'monitor', price: 50}
]

// let totalPrice = 0;
// items.forEach(
//     item => {
//         totalPrice += item.price
//     }
// )


const totalPrice = items.reduce((total, item) => {
    return total + item.price
},0)

console.log(totalPrice);

let x = [1,2,3,4,5]

const sum = x.reduce((total, x) => {
    return total + x
},0)
console.log(sum);

