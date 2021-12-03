const fs = require('fs');
const { parse } = require('path');

fs.readFile('./input.txt', (err, data)=> {
  if(err) {
    console.error(err);
    return;
  }
  let arrayOfValues = data.toString().split('\r\n');
  
  arrayOfValues = arrayOfValues.map((element,index) => {
    return element.split("");
  });

  transposedArray = arrayOfValues[0].map((_, colIndex) => arrayOfValues.map(row => row[colIndex]));

  let gama = ""
  let epsilon = ""
  transposedArray.forEach(element => {
    let string = element.join("");
    let ones = (string.match(/1/g) || []).length;
    let zeros = (string.match(/0/g) || []).length;
    if(ones > zeros) {
      gama += "1";
      epsilon += "0";
    }
    else {
      epsilon += "1";
      gama += "0";
    }
  });
  console.log(gama);
  console.log(epsilon);
  console.log(parseInt(gama,2)*parseInt(epsilon,2));

  var count = 0;
  function recursiveOxygen(arrayOfValuesOxygen)
  {
    let gama = "";
    let epsilon = "";
    if(arrayOfValuesOxygen.length === 1) {
      console.log("entra");
      return arrayOfValuesOxygen;
    }
    let transposedArray = arrayOfValuesOxygen[0].map((_, colIndex) => arrayOfValuesOxygen.map(row => row[colIndex]));
    transposedArray.forEach(element => {
      let string = element.join("");
      let ones = (string.match(/1/g) || []).length;
      let zeros = (string.match(/0/g) || []).length;
      if(ones > zeros) {
        gama += "1";
        epsilon += "0";
      }
      else if (ones < zeros){
        epsilon += "1";
        gama += "0";
      }
      else if (ones === zeros) {
        epsilon += "0";
        gama += "1";
      }
    });
    console.log(count);
    arrayOfValuesOxygen = arrayOfValuesOxygen.filter(element => {
      return element[count] === gama[count];
    })
    count++;
    // console.log(arrayOfValuesOxygen);
    return recursiveOxygen(arrayOfValuesOxygen);
  }
  let value = recursiveOxygen([...arrayOfValues]);
  value = value[0].join("");
  console.log(value);
  var count2 = 0;
  function recursiveCO2(arrayOfValuesCO2)
  {
    let gama = "";
    let epsilon = "";
    if(arrayOfValuesCO2.length === 1) {
      console.log("entra");
      return arrayOfValuesCO2;
    }
    let transposedArray = arrayOfValuesCO2[0].map((_, colIndex) => arrayOfValuesCO2.map(row => row[colIndex]));
    transposedArray.forEach(element => {
      let string = element.join("");
      let ones = (string.match(/1/g) || []).length;
      let zeros = (string.match(/0/g) || []).length;
      if(ones > zeros) {
        gama += "1";
        epsilon += "0";
      }
      else if (ones < zeros){
        epsilon += "1";
        gama += "0";
      }
      else if (ones === zeros) {
        epsilon += "0";
        gama += "1";
      }
    });
    console.log(count2);
    arrayOfValuesCO2 = arrayOfValuesCO2.filter(element => {
      return element[count2] === epsilon[count2];
    })
    count2++;
    // console.log(arrayOfValuesCO2);
    return recursiveCO2(arrayOfValuesCO2);
  }
  let value2 = recursiveCO2([...arrayOfValues]);
  value2 = value2[0].join("");
  console.log(value2);
  console.log(parseInt(value,2) * parseInt(value2,2));
    
  });