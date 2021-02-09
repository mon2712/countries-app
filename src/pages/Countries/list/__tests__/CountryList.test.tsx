import { MemoryRouter } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

import CountryList from '../CountryList';
import { COUNTRIES } from '../graphql';

const mocks: any = [
    {
        request: {
            query: COUNTRIES,
        },
        result: {
            data: {
                Country: [
                    {
                        _id: '3',
                        name: 'Afghanistan',
                        capital: 'Kabul',
                        population: 27657145,
                    },
                    {
                        _id: '4',
                        name: 'Mexico',
                        capital: 'Ciudad de México',
                        population: 27657145,
                    },
                ],
                Currency: [
                    {
                        _id: '2564',
                        name: 'Malagasy ariary',
                        code: 'MGA',
                    },
                ],
                Language: [
                    {
                        _id: '22',
                        name: 'Pashto',
                    },
                ],
                Region: [
                    {
                        _id: '10',
                        name: 'Asia',
                    },
                ],
            },
        },
    },
];

describe('CountryList', () => {
    it('while loading', () => {
        let component;

        component = create(
            <MemoryRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryList />
                </MockedProvider>
            </MemoryRouter>,
        );
        const p = component.root.findByType('h1');

        expect(p.children.join('')).toContain('Loading...');
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders without error', async () => {
        let component;

        component = create(
            <MemoryRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <CountryList />
                </MockedProvider>
            </MemoryRouter>,
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        const h1 = component.root.findByType('h1');
        const h3 = component.root.findByType('h3');

        expect(h1.children.join('')).toContain('Countries List');
        expect(h3.children.join('')).toContain(
            `Total: ${mocks[0].result.data.Country.length}`,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
