import CountryView from './CountryView';

import { Country } from 'models';

export interface CountryData {
    Country: Country[];
}

export interface CountryVars {
    _id?: string;
}

export default CountryView;
