function fibo(num) {
    let a = 0;
    let b = 1;
    let c = num;
    const resultado = [];
    for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
        resultado.push(c);
    }
    return resultado;
}

fibo(6)
console.log(fibo(6))