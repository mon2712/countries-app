import * as qs from './querystring';

describe('utils: querystring', () => {
    let result, expected;

    const querystring =
        '?currencies=EUR&languages=Albanian,Arabic&regions=Americas';
    const queryobject = {
        currencies: 'EUR',
        languages: 'Albanian,Arabic',
        regions: 'Americas',
    };

    beforeEach(() => {
        result = false;
        expected = true;
    });

    describe('parse', () => {
        it('parses a querystring and returns an object', () => {
            result = qs.parse(querystring);
            expected = queryobject;
            expect(result).toEqual(expected);
        });
    });

    describe('stringify', () => {
        it('stringifies an object and returns a querystring', () => {
            result = qs.stringify(queryobject);
            expected = querystring;
            expect(result).toEqual(expected);
        });

        it('normalizes a querystring before parsing it', () => {
            result = qs.parse('?currencies=EUR');
            expected = {
                currencies: 'EUR',
            };
            expect(result).toEqual(expected);
        });
    });
});
