import React from 'react';
import { useQuery } from '@apollo/client';

import { COUNTRIES } from './graphql';

type CountryList = {
    className: string;
};

const CountryList = (props: CountryList): React.ReactElement => {
    const { loading, error, data } = useQuery(COUNTRIES);

    return <div>Country list</div>;
};

export default CountryList;
