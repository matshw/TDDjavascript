const conversor = require('./temperatura.js')

test('Está convertendo corretamente', () =>{
    expect(conversor.celparafar('10')).toBe(50);
});

test('Está convertendo corretamente', () =>{
    expect(conversor.farparacel('185')).toBe(85);
});