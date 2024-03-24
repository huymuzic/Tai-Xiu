weight = prompt("What is your weight in kilograms?");
height = prompt("What is your height in meters");
bmi = Math.round(weight/height/height);
if (bmi < 18.5) {
    console.log(`Your bmi is ${bmi}, so you are underweight.`)
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Your bmi is ${bmi}, so you have normal weight.`)
}