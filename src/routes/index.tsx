import React from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import makeResourceRoutes from './resourceRoutes';

export const Routes = (): React.ReactElement => (
    <Router>
        <Switch>
            {makeResourceRoutes()}
            <Redirect to={'/countries'} />
        </Switch>
    </Router>
);

export default Routes;
