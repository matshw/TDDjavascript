function palindromo(frase){

    const fraseInvertida = frase.split('').reverse().join('');
    return frase === fraseInvertida;
}

module.exports = {
    palindromo: palindromo
}