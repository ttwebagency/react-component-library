# React Component Library

An open-source, reusable React Component Library built using React, TypeScript and Rollup.

The `react-component-library` is hosted on GitHub.

## Technology Stack

+ React (18.1.0)
+ TypeScript (4.7.3)
+ Rollup (2.75.5)
+ styled-components (5.3.5)

## Run
```
npm run build
```

## Updating & Publishing the Component Library

To make changes to the `react-component-library` code:

+ `pull` the `main` branch to get the changes locally.
+ Create a feature branch off the `main` branch with the naming convention of: `feat/new-component`.
+ Commit the changes on the feature branch and create a `Pull Request (PR)` to merge the change back into the `main` branch.
+ Once the PR has been approved, `squash and merge` the change into the `main` branch to add the change to the production code.
+ Update the version number within the `package.json` file using `npm version major | minor | patch` command in the terminal.
+ Publish the package to `npm` using the `npm publish` command. 

## Install

The steps used to install and use the `react-component-library`.

### Setup the .npmrc configuration file

To use the `react-component-library` in your React application, first update the global `.npmrc` configuration file. This needs to be updated with the following credentials:
```
registry=https://registry.npmjs.org/
@ttwebagency:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=AUTH_TOKEN_HERE
```
The `authToken=AUTH_TOKEN_HERE` value should be replaced with an Auth Token. A token can be requested by emailing: contact@thetinywebagency.com

### Install the package

In your React application folder, install the `react-component-library` using `npm`:
```
npm install @ttwebagency/react-component-library
```
This will install the latest version. To install a specific version of the `react-component-library` use this command:
```
npm install @ttwebagency/react-component-library@0.5.3
```

## Components

Once the `react-component-library` has been installed, you can use the components within your React application.

### Import Components

Begin by importing the library and the components required, into your React application, like so:
```javascript
import { Layout, Button, Link } from "@ttwebagency/react-component-library";
```

## Button component

| Props              |                                             |
| ------------------ | --------------------------------------------|
| type (optional)    | "button" | "submit" | "reset" | undefined   |