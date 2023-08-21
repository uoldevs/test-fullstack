export function CPFValidation(cpf: string) {
    cpf = cpf.replace(/[.-]/g, '');

    let sum;
    let rest;
    sum = 0;

    if (/^(\d)\1+$/.test(cpf)) return false; // CPF invalido caso todos os digitos sejam iguais

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
}
