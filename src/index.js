/**
 * Identifica a bandeira do cartão de crédito pelo número.
 * @param {string} cardNumber - Número do cartão (apenas dígitos).
 * @returns {string|null} - Nome da bandeira ou null se não identificado.
 */
function identificarBandeira(cardNumber) {
    if (!cardNumber) return null;

    // Visa: começa com 4
    if (/^4/.test(cardNumber)) return 'Visa';

    // MasterCard: 51-55, 2221-2720
    if (/^5[1-5]/.test(cardNumber) || /^2(2[2-9][1-9]|2[3-9]\d|[3-6]\d\d|7([01]\d|20))/.test(cardNumber)) {
        return 'MasterCard';
    }

    // Elo: alguns BINs conhecidos (exemplo, pode ser expandido)
    if (/^(4011|4312|4389)/.test(cardNumber)) return 'Elo';

    // American Express: 34 ou 37
    if (/^3[47]/.test(cardNumber)) return 'American Express';

    // Discover: 6011, 65, 644-649
    if (/^(6011|65|64[4-9])/.test(cardNumber)) return 'Discover';

    // Hipercard: geralmente 6062
    if (/^6062/.test(cardNumber)) return 'Hipercard';

    return null;
}


// Exemplo de uso:
// console.log(identificarBandeira('4111111111111111')); // Visa
// console.log(identificarBandeira('5500000000000004')); // MasterCard
// console.log(identificarBandeira('4011780000000000')); // Elo
// console.log(identificarBandeira('371449635398431'));  // American Express
// console.log(identificarBandeira('6011111111111117')); // Discover