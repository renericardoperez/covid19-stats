import { CountryModel } from '../../models/country';

// SYNC
export const UPDATE_COUNTRY_LIST = 'UPDATE_COUNTRY_LIST';
export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

// ASYNC
export const FETCH_COUNTRY_LIST = 'FETCH_COUNTRY_LIST';
export const FETCH_COUNTRY_LIST_FULFILLED = 'FETCH_COUNTRY_LIST_FULFILLED';
export const FETCH_COUNTRY_LIST_PENDING = 'FETCH_COUNTRY_LIST_PENDING';
export const FETCH_COUNTRY_LIST_REJECTED = 'FETCH_COUNTRY_LIST_REJECTED';

export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA';
export const FETCH_COUNTRY_DATA_FULFILLED = 'FETCH_COUNTRY_DATA_FULFILLED';
export const FETCH_COUNTRY_DATA_PENDING = 'FETCH_COUNTRY_DATA_PENDING';
export const FETCH_COUNTRY_DATA_REJECTED = 'FETCH_COUNTRY_DATA_REJECTED';

export interface Country {
  country: string;
  cases: {
    new: string;
    active: number;
    critical: number;
    recovered: number;
    total: number;
  };
  deaths: { new: string; total: number };
  tests: { total: number };
  day: string;
  time: string;
}

export interface CountryState {
  currentCountry: Country | {};
  favoriteCountries: CountryModel[];
  countryList: CountryModel[];
  errors: any[];
  isLoading: boolean;
}

interface UpdateCountryListAction {
  type: typeof UPDATE_COUNTRY_LIST;
  payload: CountryModel[];
}
interface UpdateFavoritesAction {
  type: typeof UPDATE_FAVORITES;
  payload: CountryModel[];
}

interface FetchCountryListAction {
  type: typeof FETCH_COUNTRY_LIST;
  payload: CountryModel[];
}

interface FetchCountryDataAction {
  type: typeof FETCH_COUNTRY_DATA;
  payload: CountryModel[];
}

interface FetchFulfilledAction {
  type:
    | typeof FETCH_COUNTRY_LIST_FULFILLED
    | typeof FETCH_COUNTRY_DATA_FULFILLED;
  payload: { data: { response: string[] } };
}

interface FetchRejectedAction {
  type: typeof FETCH_COUNTRY_LIST_REJECTED | typeof FETCH_COUNTRY_DATA_REJECTED;
  payload: { data: { errors: [] } };
}
interface FetchPendingAction {
  type: typeof FETCH_COUNTRY_LIST_PENDING | typeof FETCH_COUNTRY_DATA_PENDING;
}

export type CountryActionTypes =
  | UpdateCountryListAction
  | UpdateFavoritesAction
  | FetchCountryListAction
  | FetchCountryDataAction
  | FetchFulfilledAction
  | FetchPendingAction
  | FetchRejectedAction;
