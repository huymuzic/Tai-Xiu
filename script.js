// Modify these code to complete your tasks

var button = document.getElementById("enter"); // Get reference to the button element with id "enter"
var input = document.getElementById("userinput"); // Get reference to the input element with id "userinput"
var ul = document.querySelector("ul"); // Get reference to the unordered list (ul) element

function inputLength() {
	return input.value.length; // Return the length of input value
}

function createListElement() {
	var li = document.createElement("li"); 
	var span = document.createElement("span");
	input.value += " "; 
    span.appendChild(document.createTextNode("🗑️")); 
	span.style.cursor = "pointer";
    span.classList.add("delete"); 
    li.appendChild(document.createTextNode(input.value)); 
    li.appendChild(span); 
	ul.appendChild(li); 
	input.value = ""; 

	span.addEventListener("click", function() {
        li.remove(); // Remove the list item from the DOM
    });
}

function addListAfterClick() {
	if (inputLength() > 0) { // Check if input value has length greater than 0
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { // Check if input value has length greater than 0 and Enter key is pressed
		createListElement(); // Call the createListElement() function to add a new list item
	}
}

button.addEventListener("click", addListAfterClick); // Add event listener to the button for click event to add a new list item
input.addEventListener("keypress", addListAfterKeypress); // Add event listener to the input for keypress event to add a new list item