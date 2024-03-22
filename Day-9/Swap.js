let x = 10;
let y = 20;

// Using temp variable

let temp;

temp = x;
x = y;
y = temp;


console.log("x = " + x);
console.log("y = " + y);

// Using maths

z = x + y;
x = z - x;
y = z - y;

console.log("x = " + x);
console.log("y = " + y);
