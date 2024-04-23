const cpf = require('./cpf.js')

test('O CPF é válido', () =>{
    expect(cpf.verificar('078.917.821.48')).toBe(true);
})

test('O CPF é inválido', () =>{
    expect(cpf.verificar('012.923.832.12')).toEqual(false);
})
