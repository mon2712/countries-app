# Countries Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application was built with the [endpoint](https://github.com/lennertVanSever/graphcountries).

## Solution

What I used for this challenge was:

-   Typescript for type checking
-   Apollo Graphql to connect to the endpoint.
-   Material UI to simplify to help me with the UI of the basic components.
-   React final form to handle the filters
-   Styled-components to help out with some styles extra from the usage of Material UI
-   React router to handle the routes

For the list of countries I used a virtualized table to handle all the data, with the help of react-virtualized and Material UI. What I was thinking to do was the pagination with graphql, but the amount of data was not worrying me so I just virtualized the table.

I configured ESLint to mantain the consistency of my code.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eslint`

Fixes eslint errors
