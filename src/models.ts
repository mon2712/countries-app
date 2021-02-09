export interface Currency {
    _id: string;
    name: string;
    code: string;
    symbol: string;
}

export interface Language {
    _id: string;
    name: string;
    nativeName: string;
}

export interface SubRegion {
    _id: string;
    name: string;
}

export interface Region {
    _id: string;
    name: string;
    subregions?: SubRegion[];
}

export interface Country {
    _id: string;
    name: string;
    capital: string;
    location?: {
        longitude: number;
        latitude: number;
    };
    subregion?: {
        _id: string;
        name: string;
        region: {
            name: string;
        };
    };
    timezones?: {
        _id: string;
        name: string;
    }[];
    callingCodes?: string[];
    officialLanguages?: Language[];
    population: number;
    currencies?: Currency[];
    flag?: {
        _id: string;
        svgFile: string;
    };
}
