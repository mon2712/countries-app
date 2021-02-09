import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import makeResourceRoutes from './resourceRoutes';

export const Routes = (): React.ReactElement => (
    <Router>
        <Switch>{makeResourceRoutes()}</Switch>
    </Router>
);

export default Routes;
