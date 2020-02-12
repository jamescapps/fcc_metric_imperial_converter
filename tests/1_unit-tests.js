/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai')
const assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

const convertHandler = new ConvertHandler()

suite('Unit Tests', () => {
  
  suite('Function convertHandler.getNum(input)', () => {
    
    test('Whole number input', (done) => {
      const input = '32L'
      assert.equal(convertHandler.getNum(input),32)
      done()
    })
    
    test('Decimal Input', (done) => {
      const input = '3.1mi'
      assert.equal(convertHandler.getNum(input), 3.1)  
      done()
    })
    
    test('Fractional Input', (done) => {
      const input = '1/2gal'
      assert.equal(convertHandler.getNum(input), 0.5)
      done()
    })
    
    test('Fractional Input w/ Decimal', (done) => {
      const input = '1.5/6km'
      assert.equal(convertHandler.getNum(input), 0.25)
      done()
    })
    
    test('Invalid Input (double fraction)', (done) => {
      const input = '1.2/4/33'
      assert.equal(convertHandler.getNum(input), 'invalid number')
      done()
    })
    
    test('No Numerical Input', (done) => {
      const input = "mi"
      assert.equal(convertHandler.getNum(input), 1)
      done()
    })
    
  })
  
  suite('Function convertHandler.getUnit(input)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase())
      })
      done()
    })
    
    test('Unknown Unit Input', (done) => {
      const input = "test"
      assert.equal(convertHandler.getUnit(input), "invalid unit")
      done()
    })
  
  })
  
  suite('Function convertHandler.getReturnUnit(initUnit)', ()  => {
    
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal','l','mi','km','lbs','kg']
      const expect = ['L','gal','km','mi','kg','lbs']
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i])
      })
      done()
    })
    
  }) 
  
  suite('Function convertHandler.spellOutUnit(unit)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal','l','L','lbs','kg','mi','km']
      const expect = ['gallon','liter','liter','pounds','kilograms','miles','kilometers']
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done()
    })
    
  })
  
  suite('Function convertHandler.convert(num, unit)', () => {
    
    test('Gal to L', (done) => {
      const input = [5, 'gal']
      const expected = 18.9271
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance
      done()
    })
    
    test('L to Gal', (done) => {
      const input = [2, 'l']
      const expected = 0.52834
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance 
      done()
    })
    
    test('Mi to Km', (done) => {
      const input = [3, 'mi']
      const expected = 4.82802
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance 
      done()
    })
    
    test('Km to Mi', (done) => {
      const input = [4.82802, 'km']
      const expected = 3
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance 
      done()
    })
    
    test('Lbs to Kg', (done) => {
      const input = [2, 'lbs']
      const expected = 0.907184
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance 
      done()
    })
    
    test('Kg to Lbs', (done) => {
      const input = [5, 'kg']
      const expected = 11.023122100918888
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1) //0.1 tolerance 
      done()
    })
    
  })

})