import { MemoryRouter } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

import CountryView from '../CountryView';
import { COUNTRY_DATA } from '../graphql';

const mocks: any = [
    {
        request: {
            query: COUNTRY_DATA,
            variables: {
                _id: '3',
            },
        },
        result: {
            data: {
                Country: [
                    {
                        _id: '3',
                        area: 652230,
                        name: 'Afghanistan',
                        capital: 'Kabul',
                        population: 27657145,
                        flag: {
                            _id: '1',
                            svgFile: 'https://restcountries.eu/data/afg.svg',
                        },
                        location: {
                            latitude: 33,
                            longitude: 65,
                        },
                        currencies: [
                            {
                                _id: '25',
                                name: 'Afghan afghani',
                                code: 'AFN',
                                symbol: '؋',
                            },
                        ],
                        officialLanguages: [
                            {
                                _id: '24',
                                name: 'Turkmen',
                                nativeName: 'Türkmen',
                            },
                        ],
                        subregion: {
                            _id: '9',
                            name: 'Southern Asia',
                            region: {
                                _id: '10',
                                name: 'Asia',
                            },
                        },
                        timezones: [
                            {
                                _id: '8',
                                name: 'UTC+04:30',
                            },
                        ],
                    },
                ],
            },
        },
    },
];

describe('CountryView', () => {
    it('while loading', () => {
        let component;

        component = create(
            <MemoryRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryView />
                </MockedProvider>
            </MemoryRouter>,
        );
        const p = component.root.findByType('h1');

        expect(p.children.join('')).toContain('Loading...');
        expect(component.toJSON()).toMatchSnapshot();
    });
});
