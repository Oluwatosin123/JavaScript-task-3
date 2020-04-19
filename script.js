

const user = (userInput) => {
  let arrayOfNumbers = [];
  let present;
  for (let x = 1; x <= userInput; x++) {
    if (x % 2 === 0 && x % 3 === 0 && x % 5 === 0) {
      present = "yu-gi-oh";
    } else if (x % 2 === 0 && x % 3 === 0) {
      present = "yu-gi";
    } else if (x % 2 === 0 && x % 5 === 0) {
      present = "yu-oh";
    } else if (x % 3 === 0 && x % 5 === 0) {
      present = "gi-oh";
    } else if (x % 2 === 0) {
      present = "yu";
    } else if (x % 3 === 0) {
      present = "gi";
    } else if (x % 5 === 0) {
      present = "oh";
    } else {
      present = x;
    }
    arrayOfNumbers.push(present);
  }
  console.log(arrayOfNumbers);
  return arrayOfNumbers;
};
user(20);
