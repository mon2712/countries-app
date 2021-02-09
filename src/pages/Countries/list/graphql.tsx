import { gql } from '@apollo/client';

import { fragments } from './fragments';

export const COUNTRIES = gql`
    query GetCountriesList($first: Int, $offset: Int, $filter: _CountryFilter) {
        Country(first: $first, offset: $offset, filter: $filter) {
            ...CountryAttributes
        }
        Currency {
            _id
            name
            code
        }
        Language {
            _id
            name
        }
        Region {
            _id
            name
        }
    }
    ${fragments.country}
`;
