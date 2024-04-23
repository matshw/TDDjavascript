function celparafar(temperatura){
    return ((temperatura * (9/5)) + 32);
}

function farparacel(temperatura){
    return ((temperatura - 32) * (5/9));
}

module.exports = {
    celparafar : celparafar,
    farparacel : farparacel
}