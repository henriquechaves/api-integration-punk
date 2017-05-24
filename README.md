# Integration Punk API

This is a CASE that consumes resource of the following general purpose API:

- [Punk API](https://punkapi.com/documentation/v2)

Basically it consume data from the API and present it in a web-based list page,
with search and pagination capability.

## Technologies

+ React JS
+ Bootstrap 4
+ Webpack 2
+ npm
+ Tests with Mocha, Sinon and Chai
+ Redux
+ React Routes
+ POSTCSS
+ Axios
+ ESlint
+ ES6

## Available Commands

1. `npm run start` - starts the development server with hot reloading enabled

2. `npm run bs` - bundles the code and starts the production server

3. `npm run test` - start the test runner

4. `npm run watch:test` - start the test runner with watch mode

5. `npm run cover` - generates test coverage report

6. `npm run lint` - runs linter to check for lint errors

## Server Side Rendering

Inspirated on [Mern Starter](https://github.com/Hashnode/mern-starter) it use React Router's match function for handling all page requests so that browser history works.

All the routes are defined in `client/routes.js`. React Router renders components according to route requested.

## More

The application is component-based and make use of Axios to fetch the data.

Some tests were made in Mocha, Sinon and Chai, plus Promised Chai to async tests.

## TODO:

+ More tests.
+ Improve the linter config.
+ Update react-router and webpack to latests versions
+ ...
