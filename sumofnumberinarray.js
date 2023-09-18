function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const result = sumArray(myArray);
  console.log("The sum of the numbers in the array is:", result);