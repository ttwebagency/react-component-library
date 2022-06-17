# React Component Library

A reusable React Component Library built using React, TypeScript and Rollup.

## Technology Stack

+ React (18.1.0)
+ TypeScript (4.7.3)
+ Rollup (2.75.5)

## Run
```
npm run build
```

## Update .npmrc file
The `.npmrc` global configuration file needs to be updated with the credentials to use the React Component Library within a React application.

```
registry=https://registry.npmjs.org/
@ttwebagency:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=AUTH_TOKEN_HERE
```

The `authToken` value is the token from within this GitHub repository.

To retrieve a token email: contact@thetinywebagency.com 

## Publish Changes
To publish updates/changes made to the React Component Library:

+ Create a Pull Request (PR) to merge the changes into the `main` branch.
+ Once merged, increase the version number following semantic versioning in the `package.json` file.

```
npm publish
```

The Component Library is created as a package and is hosted within GitHub.

## Import the Component Library
Once the React Component Library is published, it can be imported into a React application.
```
npm install @ttwebagency/react-component-library
```

To import a component from the library inside a React component within a React application:
```javascript
import { Button } from "@ttwebagency/react-component-library";
```