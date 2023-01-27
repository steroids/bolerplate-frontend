import {Currency} from 'core/models';
import {CurrencyAction, CurrencyActionTypes} from 'store/types/currency';
import {RootState} from '.';

/** Стейт списка валют. */
interface CurrencyListState {
    /** Загружается ли валюта в данный момент. */
    readonly isLoading?: boolean;

    /** Список полученных валют. */
    readonly currencyList: Currency[];

    /** Ошибка при загрузке списка валют. */
    readonly error?: string;
}

const initialState: CurrencyListState = {
    isLoading: false,
    currencyList: [],
    error: undefined,
};

export const currencyList = (state = initialState, action: CurrencyAction): CurrencyListState => {
    switch (action.type) {
        case CurrencyActionTypes.FETCH_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case CurrencyActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currencyList: action.payload,
            };
        case CurrencyActionTypes.FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const selectorCurrencyList = (state: RootState) => state.currency.currencyList;
export const selectorCurrencyListIsLoading = (state: RootState) => state.currency.isLoading;
