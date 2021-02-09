import { gql } from '@apollo/client';

export const fragments = {
    country: gql`
        fragment CountryAttributes on Country {
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
    `,
};
