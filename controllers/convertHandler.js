/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var unitNum = input.toLowerCase().split(/[a-z]/)
    var divCheckInput1 = unitNum[0].split('')
//    var inputArr = input.toLowerCase().match(/[a-z]+|[^a-z]+/gi)


   if(unitNum[0] === "") {
      result = 1
    } else if (isNaN(unitNum[0]) && unitNum[0] != "." && unitNum[0].indexOf('/') == -1) {
      result = "invalid number"
    } else if (divCheckInput1[0].indexOf('/') == 0) {
      result = "invalid number"
    } else {
      result = eval(unitNum[0])
    }
   
    return result
  };
  
  this.getUnit = function(input) {
    var result;
    var validUnits = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    //Regex to remove all non-letters and convert to lower case.
    var unitInput = input.replace(/[^a-zA-Z-]/g, '').toLowerCase();
   
    for (var i = 0; i < validUnits.length; i++) {
      if (unitInput == validUnits[i]) {
        result = unitInput
        break;
      } else {
        result = "invalid unit"
      }
    }
    console.log(result)
    return result
  };
  
 this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal':
        result = 'L'
        break
      case 'l':
        result = 'gal'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit) {
      case 'gal':
        result = 'gallon'
        break
      case 'l':
        result = 'liter'
        break
      case 'L':
        result= 'liter'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
    }
    return result.toFixed(5);
  };
  
 this.getString = function(initNum, initUnit, returnNum, returnUnit, spelledUnit) {
    var result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + spelledUnit
    return result;
  };
  
}

module.exports = ConvertHandler;
