const lista = require('./lista.js')
test('A lista está organizada em forma crescente', () =>{
    expect(lista.organizar([2,4,3,1],'crescente')).toEqual([1,2,3,4]);
})

test('A lista está organizada em forma decrescente', () =>{
    expect(lista.organizar([5,8,1,7],'decrescente')).toEqual([8,7,5,1]);
})