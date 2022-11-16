//TEST

const palindromo = require('../utils/palindromo');

test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
})

test ('palindromo de barbara', () => {
    const result = palindromo('barbara')
    expect(result).toBe('arabrab')
})

test ('palindromo de ana', () => {
    const result = palindromo('ana')
    expect(result).toBe('ana')
})

test ('palindromo de Ana', () => {
    const result = palindromo('Ana')
    expect(result).toBe('anA')
})