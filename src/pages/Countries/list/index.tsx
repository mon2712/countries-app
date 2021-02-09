import CountryList from './CountryList';
import { RouteComponentProps } from 'react-router-dom';

import { Country, Currency, Language, Region } from 'models';

export default CountryList;

export type CountryListProps = RouteComponentProps & {
    className?: string;
};

export interface CountryData {
    Country: Country[];
    Currency: Currency[];
    Region: Region[];
    Language: Language[];
}

export type FilterType =
    | undefined
    | {
          OR?: Array<{
              currencies?: {
                  code_in?: string[] | undefined;
              };
              officialLanguages?: {
                  name_in?: string[];
              };
              subregion?: {
                  region_in?: { name_in: string[] };
              };
          }>;
      };

export interface CountryVars {
    first?: number;
    offset?: number;
    filter?: FilterType;
}
