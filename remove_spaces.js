function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }
  
  const inputString = 'Hello, World!';
  const stringWithoutSpaces = removeSpaces(inputString);
  console.log(stringWithoutSpaces); // Output: "Hello,World!"
  