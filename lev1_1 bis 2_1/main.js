// lev1_1: Math.PI

const PI = Math.PI
console.log(PI);

let roundedPI = PI.toFixed(2)
console.log(roundedPI);



// lev1_2: Math.round()

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

array.forEach((num) => {
    console.log(Math.round(num))
})



// lev1_3: Math.random(), Math.floor()

randomNum = Math.random();
console.log(randomNum);

randomNum1_10 = (Math.random() * 11)+1;
console.log(randomNum1_10);

randomNum1_100 = (Math.random() * 101)+1;
console.log(randomNum1_100);



// lev2_1: Math.round() toFixed()

function roundTo(Zahl, Genauigkeit) {
    console.log(Zahl.toFixed(Genauigkeit));
}
roundTo(3.1415926535, 5);
// console.log(roundTo(3.1415926535, 5)); // 3.14159



