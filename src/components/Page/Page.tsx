import React, { ReactNode, ReactElement } from 'react';

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
        {children}
    </>
);

export default Page;
