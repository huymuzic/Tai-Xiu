var fruit = ["Banana", "Apples", "Oranges", "Blueberries"];
var fruit2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];


 fruit.shift();
 fruit.sort();
 fruit.push("Kiwi");
 fruit.splice(0, 1);

 fruit.reverse();

console.log(fruit);

console.log(fruit2[1][1][0]);