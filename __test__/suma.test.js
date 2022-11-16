// TEST

const sum = require('../utils/suma');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})


test('adds -2 + -5 to equal -7', () => {
    expect(sum(-2,-5)).toBe(-7)
})


test('adds 0.2 + 5 to equal 5.2', () => {
    expect(sum(0.2,5)).toBe(5.2)
})


test('adds -2 + 5 to equal 3', () => {
    expect(sum(-2,5)).toBe(3)
})