const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const canDrive = ages.find((age) => age >= 50)
console.log(canDrive);

const canDriveIndex = ages.findIndex((age) => age >= 50)
console.log(canDriveIndex);