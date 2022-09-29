# React Component Library

An open-source, reusable React Component Library built using React, TypeScript and Rollup.

The `react-component-library` is hosted on GitHub.

## Requirements

+ `Node` (16.13.2 and above)
+ `npm` (8.1.2 and above)

## Technology Stack

+ `React` (18.1.0)
+ `TypeScript` (4.7.3)
+ `Rollup` (2.75.5)
+ `styled-components` (5.3.5)

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

### Button component

```javascript
import { Button } from "@ttwebagency/react-component-library";
```

Renders a `<button>` or `<a>` element within the application.

```javascript
// Will render with the default type="button"
<Button>Button</Button>

// Will render with the type="submit"
<Button type="submit">Button</Button>

// Will render the Button as a link
<Button url="https://example.com">Button</Button>

// Add target attribute to open in a new browser tab/window
<Button url="https://example.com" target="blank">Button</Button>

// Call a method
<Button onClick={methodName}>Button</Button>

// Disable the Button
<Button disabled>Button</Button>
```

### Image component

```javascript
import { Image } from "@ttwebagency/react-component-library";
```

Renders an `<img>` element within the application.

```javascript
<Image src="img/imageone.jpg" width="200" height="200" alt="Example image." />
```

To apply `lazy loading` use the `lazyLoad` prop:

```javascript
<Image src="img/imageone.jpg" width="200" height="200" alt="Example image." lazyLoad />
```

If a value is passed into the `url` prop, the image will be wrapped inside a link.

```javascript
<Image url="https://example.com" src="img/imageone.jpg" width="200" height="200" alt="Example image." />
```

To open a link in a new browser tab/window, use the `openAsTab` prop:

```javascript
<Image url="https://example.com" src="img/imageone.jpg" width="200" height="200" alt="Example image." openAsTab />
```

### Label component

```javascript
import { Label } from "@ttwebagency/react-component-library";
```

Render a `<label>` element for forms within the application. The `name` prop value should be the same as the `id` attribute value of the form field.

```javascript
<Label name="firstName">First name:</Label>
```

### Layout component

```javascript
import { Layout } from "@ttwebagency/react-component-library";
```

Apply a component that allows a consistant layout across multiple pages within the application. Ideal for header and footer components to be applied.

Adds the `<main>` element to the application.

```javascript
<Layout>
    <p>The page content goes here.</p>
</Layout>
```

### Link component

```javascript
import { Link } from "@ttwebagency/react-component-library";
```

Renders an `<a>` element within the application.

```javascript
// Render a link
<Link url="https://example.com">Link</Link>

// Render a link that opens a new browser tab/window
<Link url="https://example.com" target="blank">Link</Link>
```

### List component

```javascript
import { List } from "@ttwebagency/react-component-library";
```

Renders a list element as either a `<ul>` unordered list, or `<ol>` ordered list, within the application. This will default to an `<ul>` unordered list.

```javascript
// Create an array of users representing our data
const App = () => {

    const Users = [
        "Dan",
        "Bob",
        "Pearl",
    ];

    return (
        // Render the components here
        <List list={users} />
    );
}
```

We place the `<List />` component in the `return` statement to render.

```javascript
// Render the list as an unordered list
<List list={users} />

// Render the list as an ordered list
<List type="ol" list={users} />
```

### Card component

```javascript
import { Card } from "@ttwebagency/react-component-library";
```

Render a card component to display content.

```javascript
<Card>
    <p>This is a Card.</p>
</Card>
```