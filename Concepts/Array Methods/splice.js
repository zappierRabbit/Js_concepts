let a = ["farzan", "abdullah", "hamza"];
let b = ["asim", "qulzam"];
let c = ["hassan", "shahmeer"];


a.splice(1, 0, ...b)
console.log(a)