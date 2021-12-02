const fs = require('fs');
const { parse } = require('path');

fs.readFile('./input.txt', (err, data)=> {
  if(err) {
    console.error(err);
    return;
  }
  let arrayOfValues = data.toString().split('\r\n');
  console.log(JSON.stringify(arrayOfValues));
  let horizontalValue = 0;
  let depthValue = 0;
  let aim = 0;
  arrayOfValues.forEach(element => {
    let elementArray = element.split(" ");
    if(elementArray[0] === "forward") {
      horizontalValue += parseInt(elementArray[1]);
      depthValue += aim * parseInt(elementArray[1]);
    }
    if(elementArray[0] === "up") {
      aim -= parseInt(elementArray[1]);
    }
    if(elementArray[0] === "down") {
      aim += parseInt(elementArray[1]);
    }
  });
  console.log("horizontalValue");
  console.log(horizontalValue);
  console.log("depthValue");
  console.log(depthValue);
  console.log("multiplied values");
  console.log(depthValue*horizontalValue);
})