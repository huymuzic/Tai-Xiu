let items = [
    { type: 'hat', points: 10 },
    { type: 'shoes', points: 20 },
    { type: 'hat', points: 5 },
    { type: 'scarf', points: 15 },
    { type: 'shoes', points: 10 }
];

let transformedItems = items.reduce((accumulator, currentItem) => {
    // Check if an item of the same type already exists in the accumulator
    let existingItem = accumulator.find(item => item.type === currentItem.type);
    
    if (existingItem) {
        // If the item exists, update its points
        existingItem.points += currentItem.points;
    } else {
        // If the item does not exist, add it to the accumulator
        accumulator.push({ type: currentItem.type, points: currentItem.points });
    }
    
    return accumulator;
}, []);

console.log(transformedItems);
transformedItems.forEach(item => {
    console.log(`Type: ${item.type}, Points: ${item.points}`);
});

let totalPoints = transformedItems.reduce((total, item) => total + item.points, 0);

console.log(`Total Points of All Types: ${totalPoints}`);

