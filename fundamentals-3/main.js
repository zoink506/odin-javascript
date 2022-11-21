function add7(num) {
  if(Number.isInteger(num)) {
    return num + 7;
  } else {
    console.error("num is not an integer")
    return -1;
  }
}

console.log(add7(7));

function multiply(num1, num2) {
  if(Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 * num2;
  } else {
    console.error("num1 or num2 is not an integer")
    return -1;
  }
  
}

console.log(multiply(2, 3));

function capitalize(str) {
  if(typeof str === "string") {
    let firstChar = str.charAt(0);
    let restOfStr = str.slice(1, str.length);

    firstChar = firstChar.toUpperCase();
    restOfStr = restOfStr.toLowerCase();

    newStr = firstChar + restOfStr;
    return newStr;

  } else {
    console.error("Argument is not a string");
    return -1;
  }
}

console.log(capitalize("lowercase UPPERCASE"));

function lastLetter(str) {
  if(typeof str === "string") {
    const lastLetter = str.charAt(str.length - 1);
    return lastLetter;

  } else {
    console.error("Argument in not a string");
    return -1;
  }
}

console.log(lastLetter("joesephu joestar"));
