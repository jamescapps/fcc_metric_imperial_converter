
'use strict';

const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
     .get((req, res) => {
        const input = req.query.input
        //const validCheck = convertHandler.validCheck(input)
        const initNum = convertHandler.getNum(input)
        const initUnit = convertHandler.getUnit(input)
          if (initNum == 'invalid number'&& initUnit !== 'invalid unit') {
            return res.json(initNum)
          } else if (initNum !== 'invalid number'&& initUnit == 'invalid unit') {
            return res.json(initUnit)
          } else if (initNum == 'invalid number'&& initUnit == 'invalid unit') {
            return res.json('invalid number and unit')
          } 
        const returnUnit = convertHandler.getReturnUnit(initUnit)
        const spelledUnit = convertHandler.spellOutUnit(returnUnit)
        const returnNum = convertHandler.convert(initNum, initUnit)
        const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit, spelledUnit)
          
       res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
    })   
}
