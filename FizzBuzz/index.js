// FizzBuzz
const body = document.body;

function createArray() {
  arr = new Array();

  for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if(i % 3 === 0) {
      arr.push("Fizz");
    } else if(i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

function printArrayToDOM(arr) {
  for(let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");

    if(arr[i] === "FizzBuzz") {
      div.setAttribute("class", "fizz-buzz");
    } else if(arr[i] === "Fizz") {
      div.setAttribute("class", "fizz");
    } else if(arr[i] === "Buzz") {
      div.setAttribute("class", "buzz");
    } else {
      div.setAttribute("class", "none");
    }

    div.innerText = arr[i].toString();
    body.append(div);
  }
}

const fizzBuzzArr = createArray();
printArrayToDOM(fizzBuzzArr);
