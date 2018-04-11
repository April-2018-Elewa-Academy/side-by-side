function base2base (n, base1, base2){
    var ourNumber = 0;
    for (let i = n.length - 1; i >= 0; i--){
        ourNumber += n[i]*Math.power(base1, (n.length - i))
    }
    return ourNumber.toString(base2);
}
