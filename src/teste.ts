function multiplicacao (a: number, b: number) {
    const resultado: number = a * b;
    console.log (`A soma dos dois numeros dar o valor de ${resultado}`);
    return resultado;
}

multiplicacao(3, 2);

function boasVindas (nome: string) {
    console.log(`Olá ${nome}, Seje bem vindo`)
}

boasVindas("Gabriel");