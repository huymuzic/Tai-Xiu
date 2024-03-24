n = prompt("months?");

function rabbitPairs(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        // Each month, the number of pairs of rabbits is the sum of pairs from two months ago and pairs from last month
        return rabbitPairs(n - 1) + rabbitPairs(n - 2);
    }
}

const pairs = rabbitPairs(n);
const numberOfRabbit = (n) => rabbitPairs(n) * 2;
console.log(`After ${n} months, there are ${pairs} pairs of rabbits which is ${numberOfRabbit(n)} rabbits in total.`);
