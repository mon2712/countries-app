import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import * as qs from 'utils/querystring';
import { isEmpty } from 'underscore';
import { withRouter } from 'react-router-dom';

import { COUNTRIES } from './graphql';
import columns from './CountriesColumns';
import CountriesFilters, { CountriesFiltersData } from './CountriesFilters';
import { TotalContainer } from './CountryList.styles';
import Page from 'components/Page';
import Table from 'components/Table';
import Loader from 'components/Loader';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { getSelectOptions } from 'utils/selectOptions';

import {
    CountryListProps,
    FilterType,
    CountryData,
    CountryVars,
} from './index';
import { Country } from 'models';

const CountryList = (props: CountryListProps): React.ReactElement | null => {
    const { history, location } = props;
    const [filters, setFilters] = useState<FilterType>(undefined);
    const [initialValues, setInitialValues] = useState<CountriesFiltersData>(
        {},
    );

    const { loading, error, data } = useQuery<CountryData, CountryVars>(
        COUNTRIES,
        {
            errorPolicy: 'all',
            variables: {
                filter: filters,
            },
        },
    );

    useEffect(() => {
        const query: {
            currencies?: string;
            languages?: string;
            regions?: string;
        } = qs.parse(location.search);

        if (isEmpty(query)) {
            setFilters(undefined);
            setInitialValues({});
            return;
        }

        const newFilters = [];

        if (query.languages) {
            newFilters.push({
                officialLanguages: {
                    name_in: query.languages.split(','),
                },
            });
        }

        if (query.currencies) {
            newFilters.push({
                currencies: {
                    code_in: query.currencies.split(','),
                },
            });
        }

        if (query.regions) {
            newFilters.push({
                subregion: {
                    region_in: { name_in: query.regions.split(',') },
                },
            });
        }

        setFilters({ OR: newFilters });
        setInitialValues({
            currencies: query.currencies
                ? query.currencies.split(',')
                : undefined,
            languages: query.languages ? query.languages.split(',') : undefined,
            regions: query.regions ? query.regions.split(',') : undefined,
        });
    }, [location]);

    if (error) {
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.message}
        </Alert>;
    }

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

    const handleOnRowClick = ({ rowData }: { rowData: Country }) => {
        history.push(`/countries/${rowData._id}`);
    };

    return (
        <Page title="Countries List">
            <Typography variant="h1">Countries List</Typography>

            <CountriesFilters
                initialValues={initialValues}
                currencyOptions={getSelectOptions('code', data.Currency)}
                languageOptions={getSelectOptions('name', data.Language)}
                regionOptions={getSelectOptions('name', data.Region)}
                setInitialValues={setInitialValues}
            />

            <TotalContainer>
                <Typography variant="h3">{`Total: ${data.Country.length}`}</Typography>
            </TotalContainer>

            <Paper
                elevation={0}
                style={{
                    height: 500,
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
