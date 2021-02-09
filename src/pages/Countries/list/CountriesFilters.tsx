import React from 'react';
import * as qs from 'utils/querystring';
import { Form, FormRenderProps } from 'react-final-form';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { FormContainer } from './CountryList.styles';
import Select from 'components/Select';
import { Grid, Button } from '@material-ui/core';

export type CountriesFiltersData = {
    currencies?: string[];
    languages?: string[];
    regions?: string[];
};

type CountriesFiltersProps = {
    currencyOptions: Array<{ title: string }>;
    regionOptions: Array<{ title: string }>;
    languageOptions: Array<{ title: string }>;
    setInitialValues: (value: CountriesFiltersData) => void;
    initialValues: CountriesFiltersData;
};

const CountriesFilters = (
    props: CountriesFiltersProps & RouteComponentProps,
) => {
    const {
        history,
        initialValues,
        languageOptions,
        regionOptions,
        currencyOptions,
        setInitialValues,
    } = props;

    const handleFilters = (values: CountriesFiltersData) => {
        const filters = {
            currencies: values.currencies && values.currencies.join(','),
            languages: values.languages && values.languages.join(','),
            regions: values.regions && values.regions.join(','),
        };
        history.push(`${location.pathname}${qs.stringify(filters)}`);
    };

    const cleanFilters = () => {
        history.push(`${location.pathname}`);
        setInitialValues({});
    };

    return (
        <Form
            onSubmit={handleFilters}
            initialValues={initialValues}
            render={({ handleSubmit }: FormRenderProps) => {
                return (
                    <FormContainer onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item md={4} lg={4}>
                                <Select
                                    name="currencies"
                                    label="Currency"
                                    options={currencyOptions}
                                    multiple
                                />
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <Select
                                    name="languages"
                                    label="Language"
                                    options={languageOptions}
                                    multiple
                                />
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <Select
                                    name="regions"
                                    label="Region"
                                    options={regionOptions}
                                    multiple
                                />
                            </Grid>
                            <Grid item container md={4} lg={4} spacing={3}>
                                <Grid item md={6} lg={6}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                    >
                                        Filtrar
                                    </Button>
                                </Grid>
                                <Grid item md={6} lg={6}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={cleanFilters}
                                        fullWidth
                                    >
                                        Limpiar Filtros
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </FormContainer>
                );
            }}
        />
    );
};

export default withRouter(CountriesFilters);
