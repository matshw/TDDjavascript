const calculadora = require('./calculadora.js')

test('A adição está correta', () =>{
    expect(calculadora.adicao(5,5)).toBe(10);
});

test('A multiplicação está correta', () =>{
    expect(calculadora.multiplicacao(5,5)).toBe(25);
});

test('A subtração está correta', () =>{
    expect(calculadora.subtracao(30,10)).toBe(20);
});

test('A divisão está correta', () =>{
    expect(calculadora.divisao(60,2)).toBe(30);
});




