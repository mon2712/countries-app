import qs from 'qs';

export function parse(querystring: string): Record<string, unknown> {
    const normalize = (querystring: string) =>
        querystring[0] === '?' ? querystring.slice(1) : querystring;
    const normalizedQuerystring = normalize(querystring);

    return qs.parse(normalizedQuerystring);
}

export function stringify(
    queryobject: Record<string, unknown>,
    encode = false,
): string {
    const querystring = qs.stringify(queryobject, {
        encode,
        arrayFormat: 'brackets',
    });

    return `?${querystring}`;
}
