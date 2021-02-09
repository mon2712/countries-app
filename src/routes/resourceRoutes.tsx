import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

export function resourceName(path: string): string | undefined {
    const match = path.match(/^\.\/(.*)\/(list|create|view|edit)\/index\.tsx$/);
    return (match && match[1]) || undefined;
}

export function resourceMethod(path: string): string | undefined {
    const match = path.match(/^\.\/(.*)\/(list|create|view|edit)\/index\.tsx$/);
    return (match && match[2]) || undefined;
}

export function resourcePath(
    name: string,
    method: string,
): { path: string; exact: boolean } {
    switch (method) {
        case 'list':
            return {
                path: `/${name}`,
                exact: true,
            };
        case 'create':
            return {
                path: `/${name}/new`,
                exact: true,
            };
        case 'view':
            return {
                path: `/${name}/:${name}_id`,
                exact: true,
            };
        case 'edit':
            return {
                path: `/${name}/:${name}_id/edit`,
                exact: false,
            };
        default:
            throw new Error(`Unexpected method: ${method}`);
    }
}

export default function makeRoutes(): RouteComponentProps {
    // @ts-expect-error context is for require
    const resourcesContext = require.context(
        'pages',
        true,
        /^\.\/(.*)\/(list|create|view|edit)\/index\.tsx$/,
    );

    const routeDescriptors = resourcesContext.keys().map((resource: string) => {
        const name = resourceName(resource);
        const method = resourceMethod(resource);

        if (!name || !method) {
            throw new Error(`Missing name or method in resource: ${resource}`);
        }

        const resPath = resourcePath(name, method);

        return {
            path: resPath.path,
            exact: resPath.exact,
            component: resourcesContext(resource).default,
        };
    });

    const routes: RouteComponentProps = routeDescriptors.map(
        (rD: RouteProps, index: number) => (
            <Route
                key={index}
                exact={rD.exact}
                path={rD.path}
                component={rD.component}
            />
        ),
    );

    return routes;
}
