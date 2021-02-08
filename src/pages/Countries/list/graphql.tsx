import { gql } from '@apollo/client';

export const COUNTRIES = gql`
    query GetCountriesList($first: Int, $offset: Int, $filter: _CountryFilter) {
        Country(first: $first, offset: $offset, filter: $filter) {
            _id
            name
            capital
            population
            location {
                latitude
                longitude
            }
            flag {
                _id
                emoji
                emojiUnicode
                svgFile
            }
            officialLanguages {
                _id
                name
                nativeName
            }
            currencies {
                _id
                name
                code
                symbol
            }
        }
    }
`;
