function verificar(cpf){

    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let sobra = soma % 11;
    let verificador = sobra < 2 ? 0 : 11 - sobra;

    if (parseInt(cpf.charAt(9)) !== verificador) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    sobra = soma % 11;
    let verificador2 = sobra < 2 ? 0 : 11 - sobra;

    if (parseInt(cpf.charAt(10)) !== verificador2) return false;

    return true;
}

module.exports = {
    verificar : verificar
}