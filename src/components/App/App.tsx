import React from 'react';
import { ApolloProvider } from '@apollo/client';

import Routes from 'routes';
import client from 'client';

const App = (): React.ReactElement => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Routes />
            </div>
        </ApolloProvider>
    );
};

export default App;
