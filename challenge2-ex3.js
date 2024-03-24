let array = [];

array[0] = 0;
array[1] = 1;

for (i = 2; i < 100; i++) {
    array[i] = array[i-2] + array [i-1];
}

const fibonacci = (num) => console.log(array[num]);

fibonacci(5);