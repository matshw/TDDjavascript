const calculadora = require('./calculadora.js')
const palindromo1 = require('./palindromo.js')
const conversor = require('./temperatura.js')
const cpf = require('./cpf.js')
const primo = require('./numeroprimo.js')
const lista = require('./lista.js')

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

test('A frase é um palíndromo', () =>{
    expect(palindromo1.palindromo('ata')).toEqual(true);
});

test('A frase não é um palíndromo', () =>{
    expect(palindromo1.palindromo('java')).toBe(false);
});

test('Está convertendo corretamente', () =>{
    expect(conversor.celparafar('10')).toBe(50);
});

test('Está convertendo corretamente', () =>{
    expect(conversor.farparacel('185')).toBe(85);
});

test('O CPF é válido', () =>{
    expect(cpf.verificar('078.917.821.48')).toBe(true);
})

test('O CPF é válido', () =>{
    expect(cpf.verificar('012.923.832.12')).toEqual(false);
})

test('Esse número é primo', () =>{
    expect(primo.verificaprimo(2)).toBe(true);
})

test('Esse número não é primo', () =>{
    expect(primo.verificaprimo(10)).toEqual(false);
})

test('A lista está organizada', () =>{
    expect().toBe(true);
})