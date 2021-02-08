import React, { ReactElement } from 'react';

import { LoaderContainer } from './Loader.styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (): ReactElement => (
    <LoaderContainer>
        <CircularProgress />
    </LoaderContainer>
);

export default Loader;
