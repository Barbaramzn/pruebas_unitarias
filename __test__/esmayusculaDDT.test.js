// TEST

const isUpperCase = require('../utils/esmayuscula');

describe('calculator', () => {
    test.each`
      firstValue        | expectedResult    
      ${'HELLO'}        | ${true}
      ${'hello'}        | ${false}
      ${'Hello'}        | ${false}
    
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });