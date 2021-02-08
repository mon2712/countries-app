import CountryList from './CountryList';

export default CountryList;

export interface Country {
    _id: string;
    name: string;
    capital: string;
    location?: {
        longitude: number;
        latitude: number;
    };
    officialLanguages?: {
        _id: string;
        name: string;
        nativeName: string;
    };
    population: number;
    currencies?: {
        _id: string;
        code: string;
        name: string;
        symbol: string;
    };
    flag?: {
        _id: string;
        svgFile: string;
    };
}
