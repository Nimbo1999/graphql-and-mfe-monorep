export default class IntlUtils {
    private static CURRENCY = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    private static LOCAL_DATE_TIME = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    static formatToCurrency(amount: number) {
        return IntlUtils.CURRENCY.format(amount);
    }

    static formatToLocalDateTime(value: number | Date) {
        return IntlUtils.LOCAL_DATE_TIME.format(value);
    }
}
