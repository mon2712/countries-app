import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';

import Routes from 'routes';
import client from 'client';
import theme from 'styles/theme';

const App = (): React.ReactElement => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Routes />
                </div>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
