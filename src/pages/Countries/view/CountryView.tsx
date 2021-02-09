import React from 'react';
import { useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import { COUNTRY_DATA } from './graphql';
import { CountryCountainer, GoBackLink } from './CountryView.styles';
import { CountryData, CountryVars } from './index';
import Page from 'components/Page';
import Loader from 'components/Loader';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const CountryView = (props: any) => {
    const { match } = props;
    const { loading, error, data } = useQuery<CountryData, CountryVars>(
        COUNTRY_DATA,
        {
            variables: {
                _id: match.params.Countries_id,
            },
        },
    );

    if (error) {
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.message}
        </Alert>;
    }

    if (loading) {
        return (
            <Page title="Cargando">
                <Typography variant="h1">Loading...</Typography>
                <Loader />
            </Page>
        );
    }

    if (!data || !data.Country.length) {
        return null;
    }

    const country = data.Country[0];

    const {
        flag,
        name,
        population,
        location,
        officialLanguages,
        currencies,
        subregion,
        timezones,
    } = country;

    return (
        <Page title="Countries List">
            <GoBackLink onClick={() => history.back()}>
                <Typography variant="button" color="secondary">
                    {'< Regresar'}
                </Typography>
            </GoBackLink>
            <Typography variant="h1">{country.name}</Typography>
            <CountryCountainer>
                <Grid container>
                    <Grid item sm={12} md={4} lg={3}>
                        <Grid container spacing={2}>
                            <Grid item md={12} lg={12}>
                                <img
                                    src={flag?.svgFile}
                                    alt={`${country.name}-flag`}
                                    height="150"
                                />
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Capital: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{name}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Population: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{population}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Area: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{`${population} km2`}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Latitude: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{location?.latitude}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Longitude: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{location?.longitude}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Official languages: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                {officialLanguages?.map((language, index) => (
                                    <span key={index}>{`${language.name}${
                                        index + 1 < officialLanguages.length
                                            ? ', '
                                            : ''
                                    }`}</span>
                                ))}
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Currencies: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                {currencies?.map((currency, index) => (
                                    <span key={index}>{`${currency.code}${
                                        index + 1 < currencies.length
                                            ? ', '
                                            : ''
                                    }`}</span>
                                ))}
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Region: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{subregion?.region.name}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Subregion: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>{subregion?.name}</span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                <span>Timezones: </span>
                            </Grid>
                            <Grid item md={6} lg={6}>
                                {timezones?.map((timezone, index) => (
                                    <span key={index}>
                                        {' '}
                                        {`${timezone.name}${
                                            index + 1 < timezones.length
                                                ? ', '
                                                : ''
                                        }`}{' '}
                                    </span>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CountryCountainer>
        </Page>
    );
};

export default withRouter(CountryView);
