export default class IntlUtils {
    private static CURRENCY = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    static formatToCurrency(amount: number) {
        return IntlUtils.CURRENCY.format(amount);
    }
}