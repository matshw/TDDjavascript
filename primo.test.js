const primo = require('./numeroprimo.js')

test('Esse número é primo', () =>{
    expect(primo.verificaprimo(2)).toBe(true);
})

test('Esse número não é primo', () =>{
    expect(primo.verificaprimo(10)).toEqual(false);
})