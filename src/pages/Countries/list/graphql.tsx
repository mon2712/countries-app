import { gql } from '@apollo/client';

export const COUNTRIES = gql`
    query GetCountriesList($first: Int, $offset: Int, $filter: _CountryFilter) {
        Country(first: $first, offset: $offset, filter: $filter) {
            _id
            name
            location {
                latitude
                longitude
            }
            flag {
                emoji
                emojiUnicode
                svgFile
            }
            officialLanguages {
                iso639_1
                iso639_2
                name
                nativeName
            }
            currencies {
                name
                code
                symbol
            }
        }
    }
`;
