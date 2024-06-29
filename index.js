

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce to sum up all the battery batches
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // Output: 31
