/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
     .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if (initNum == 'invalid number'&& initUnit !== 'invalid unit') {
        return res.json(initNum)
      } else if (initNum !== 'invalid number'&& initUnit == 'invalid unit') {
        return res.json(initUnit)
      } else if (initNum == 'invalid number'&& initUnit == 'invalid unit') {
        return res.json('invalid number and unit')
      } 
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var spelledUnit = convertHandler.spellOutUnit(returnUnit)
      var returnNum = convertHandler.convert(initNum, initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit, spelledUnit);

      
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString})
      
      
      
     

     
    

      
    });
    
};
