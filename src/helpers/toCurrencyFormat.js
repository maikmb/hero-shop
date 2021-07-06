export function toCurrencyFormat(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}