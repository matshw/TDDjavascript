const palindromo1 = require('./palindromo.js')

test('A frase é um palíndromo', () =>{
    expect(palindromo1.palindromo('ata')).toEqual(true);
});

test('A frase não é um palíndromo', () =>{
    expect(palindromo1.palindromo('java')).toBe(false);
});