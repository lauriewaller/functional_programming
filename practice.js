//------------
//Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

testString = "aaabccdddda";
// Output: "3ab2c4da"


const compressedString = (string, counter, letter) => {
  if (string === "") {
    return "";
    //if current element, previous element, next element are equal 
  } else if (string[0] === letter && string[0] === string[1]) { 
    counter++;
    return compressedString(string.substring(1), counter, string[0])
    //if current element equals previous element and not next element
  } else if (string[0] === letter && string[0] !== string[1]) {
      counter++;
      return  counter.toString() + string[0] + compressedString(string.substring(1), counter = 0, string[0]);
    //if current element equals next element but not previous element 
    } else if (string[0] !== letter && string[0] === string[1]) {
      counter++;
      return compressedString(string.substring(1), counter, string[0]);
    //if current element is not equal to next element or previous element
  } else if (string[0] !== letter && string[0] !== string[1]) {
      return string[0] + compressedString(string.substring(1), counter, string[0]);
  }

}

compressedString(testString, counter=0, letter="")

//-------------

testString = "aaabccdddda";

let newFunction = (string) => {
  let counter = 0
  let newArr = [];

  for (let i = 0; i < string.length; i++) {
    // current element, previous element, next element are equal 
    if (string[i] === string[i - 1] && string[i] === string[i + 1]) {
      counter++;
    }
    //current element equals previous element and not next element
    else if (string[i] === string[i - 1] && string[i] !== string[i + 1]) {
      counter++;
      newArr.push(counter, string[i])
      counter = 0;
    }
    //current element equals next element but not previous element 
    else if (string[i] === string[i + 1] && string[i] !== string[i - 1]) {
      counter++
    //current element is not equal to next element or previous element
    } else if (string[i] !== string[i + 1] && string[i] !== string[i - 1]) {
      newArr.push(string[i]);
    }
  }
  return newArr.join("");
}

newFunction(testString);


//------------

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}