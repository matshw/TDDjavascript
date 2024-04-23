function verificaprimo(numero){
    var divisores=0;

    for(var count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2)
        return true;
    else
        return false;
  }


module.exports = {
    verificaprimo : verificaprimo
}