const fs = require('fs');

fs.readFile('./input.txt', (err, data)=> {
  if(err) {
    console.error(err);
    return;
  }
  let arrayOfNumbers = data.toString().split('\r\n');
  let count = 0;
  arrayOfNumbers.forEach((element, index)=>{
    let previousElement = arrayOfNumbers[index-1];
    if(previousElement && parseInt(element) > parseInt(previousElement)) {
      count++;
    }
  });
  console.log('First Solution')
  console.log(count);
  let newArray = arrayOfNumbers.map((element, index)=>{
    return parseInt(element) + parseInt(arrayOfNumbers[index + 1]) + parseInt(arrayOfNumbers[index +2]);
  });
  let secondCount = 0;
  newArray.forEach((element, index)=>{
    let previousElement = newArray[index-1];
    if(previousElement && parseInt(element) > parseInt(previousElement)) {
      secondCount++;
    }
  });
  console.log('Second Solution')
  console.log(secondCount);
})