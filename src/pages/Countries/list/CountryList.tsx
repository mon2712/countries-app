import React from 'react';
import { useQuery } from '@apollo/client';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Country } from './index';
import { COUNTRIES } from './graphql';
import columns from './CountriesColumns';
import Page from 'components/Page';
import Table from 'components/Table';
import Loader from 'components/Loader';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

type CountryList = RouteComponentProps & {
    className: string;
};

interface CountryData {
    Country: Country[];
}

interface CountryVars {
    first?: number;
    offset?: number;
    filter?: {
        currencies?: {
            name: string;
        };
        officialLanguages?: {
            name: string;
        };
        subregions?: {
            name: string;
        };
    };
}

const CountryList = (props: CountryList): React.ReactElement | null => {
    const { history } = props;
    const { loading, error, data } = useQuery<CountryData, CountryVars>(
        COUNTRIES,
    );

    if (loading) {
        return (
            <Page title="Countries List">
                <Typography variant="h1">Countries List</Typography>
                <Loader />
            </Page>
        );
    }

    if (!data) {
        return null;
    }

    const rows: Country[] = data.Country;
    const handleOnRowClick = ({ rowData }: { rowData: any }) => {
        history.push(`/countries/${rowData._id}`);
    };

    return (
        <Page title="Countries List">
            <Typography variant="h1">Countries List</Typography>
            <Paper
                elevation={0}
                style={{
                    height: 700,
                    width: '100%',
                }}
            >
                <Table
                    onRowClick={handleOnRowClick}
                    rowCount={rows.length}
                    rowGetter={({ index }: { index: number }) => rows[index]}
                    columns={columns}
                />
            </Paper>
        </Page>
    );
};

export default withRouter(CountryList);
