import React, { ReactNode, ReactElement } from 'react';

import { PageContainer } from './Page.styles';
import { Helmet } from 'react-helmet';

type PageProps = {
    title?: string;
    children: ReactNode;
};

const Page = ({ title, children }: PageProps): ReactElement => (
    <>
        <Helmet>
            <title>{title || null}</title>
        </Helmet>
        <PageContainer>{children}</PageContainer>
    </>
);

export default Page;
