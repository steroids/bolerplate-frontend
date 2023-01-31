import {IGridColumn} from '@steroidsjs/core/ui/list/Grid/Grid';
import {CurrencyIso} from 'core/models';

interface ITable {
    readonly listId: string;
    readonly columns: (string | IGridColumn)[];
}

/**
 * Преобразовать данные в удобный для таблицы вид.
 * @param id Идентификатор таблицы.
 * @param currencies Типы валют.
 * @returns Таблица с идентификатором и колонками.
 */
function getCurrencyTable(id: string, currencies: CurrencyIso[]): ITable {
    const currenciesColumns = currencies.map((currencyIso) => ({
        label: currencyIso,
        attribute: currencyIso,
    }));

    const columns = [
        {label: '№', attribute: 'id'},
        {label: 'ISO', attribute: 'iso'},
        {label: 'Label', attribute: 'label'},
        ...currenciesColumns,
    ];

    return {
        listId: id,
        columns,
    };
}

export default getCurrencyTable;