console.log("Enter the seconds");
prompt = prompt("Enter the seconds:");
console.log(prompt);
numHours = Math.floor(prompt/3600);
numMinutes = Math.floor((prompt - numHours * 3600) / 60);
numSeconds = prompt - numHours * 3600 - numMinutes * 60;
console.log(numHours + ":" + numMinutes + ":" + numSeconds);

