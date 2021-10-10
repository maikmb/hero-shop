export function toCurrencyFormat(value) {
    if(isNaN(value)) return ''
    if(typeof value !== 'number') value = Number(value)
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}