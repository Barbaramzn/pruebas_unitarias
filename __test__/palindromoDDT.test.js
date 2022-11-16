// TEST

const palindromo = require('../utils/palindromo');

describe('calculator', () => {
    test.each`
      firstValue    | expectedResult    
      ${'fran'}     | ${'narf'}        
      ${'barbara'}  | ${'arabrab'}        
      ${'ana'}      | ${'ana'}        
      ${'Ana'}      | ${'anA'}      
         
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
        expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });