import { gql } from '@apollo/client';

import { fragments } from 'pages/Countries/list/fragments';

export const COUNTRY_DATA = gql`
    query GetCountryData($_id: String) {
        Country(_id: $_id) {
            ...CountryAttributes
            area
            subregion {
                _id
                name
                region {
                    _id
                    name
                }
            }
            timezones {
                _id
                name
            }
        }
    }
    ${fragments.country}
`;
