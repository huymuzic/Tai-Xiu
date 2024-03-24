function calculateTotalPoints(items) {
    // Create an empty object to store the total points for each type of item
    var totalPoints = {};

    // Iterate over each item in the array using a for loop
    for (var i = 0; i < items.length; i++) {
        var item = items[i]; // Get the current item

        // Check if the type of item already exists in the totalPoints object
        if (totalPoints.hasOwnProperty(item.type)) {
            // If it exists, add the points of the current item to the existing total
            totalPoints[item.type] += item.points;
        } else {
            // If it doesn't exist, create a new key-value pair with the type of item and its points
            totalPoints[item.type] = item.points;
        }
    }

    // Return the object containing the total points for each type of item
    return totalPoints;
}

// Example usage:
var items = [
    { type: 'hat', points: 10 },
    { type: 'shoes', points: 20 },
    { type: 'hat', points: 5 },
    { type: 'scarf', points: 15 },
    { type: 'shoes', points: 10 }
];

console.log(calculateTotalPoints(items));
