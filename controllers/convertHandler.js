  class ConvertHandler {
    constructor() {

     /*this.validCheck = (unitNum) => {
          const divCheckInput1 = unitNum[0].split('')
            return unitNum[0].split('/').length > 2 ? false
              : isNaN(unitNum[0]) && unitNum[0] != "." && unitNum[0].indexOf('/') == -1 ? false
              : divCheckInput1[0].indexOf('/') == 0 ? false
              : true
        }

      this.getNum = (unitNum, validCheck) => {
        let result = unitNum[0].length > 0 ? unitNum[0] : 1
        return validCheck ? result : 'invalid number'
     }*/

     this.getNum = (input) => {
      //Alter result to be "let result = 'grab input'.length ? 'Grap input' : 1".  Then you can say return is valid? Result : 'not valid'
      //let result = unitNum[0].length ? unitNum[0] : 1
      //this.validCheck() ? eval(result) : "invalid number"

      //Convert input to lower case, split at letters, make sure value is a number, a decimal or division, but does not contain double fractions and no number is treated as 1.
       let result
       const unitNum = input.toLowerCase().split(/[a-z]/)
       const divCheckInput1 = unitNum[0].split('')

       if(unitNum[0] === "") {
         result = 1
       } else if ((unitNum[0].split('/')).length > 2) {
         result = "invalid number"
       } else if (isNaN(unitNum[0]) && unitNum[0] != "." && unitNum[0].indexOf('/') == -1) {
         result = "invalid number"
       } else if (divCheckInput1[0].indexOf('/') == 0) {
         result = "invalid number"
       } else {
         result = eval(unitNum[0])
       }

       return result
    }
      
      this.getUnit = (input) => {
        let result
        const validUnits = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
        //Regex to remove all non-letters and convert to lower case.
        const unitInput = input.replace(/[^a-zA-Z-]/g, '').toLowerCase();
      
        //Make sure the input is a valid unit.
        for (var i = 0; i < validUnits.length; i++) {
          if (unitInput == validUnits[i]) {
            result = unitInput
            break;
          } else {
            result = "invalid unit"
          }
        }

        return result
      }
      
    this.getReturnUnit = (initUnit) => {
        let result
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

        return result
      }

      this.spellOutUnit = (unit) => {
        let result
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

        return result
      }
      
      this.convert = (initNum, initUnit) => {
        let result
        const galToL = 3.78541
        const lbsToKg = 0.453592
        const miToKm = 1.60934
        
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

        return Number(result.toFixed(5))
      }
      
    this.getString = (initNum, initUnit, returnNum, returnUnit, spelledUnit) => {
        let result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + spelledUnit

        return result
      }
  }
}

module.exports = ConvertHandler
