This library is based on this tutorial, you can refer to it if you want to understand it better:
[blog & video tutorial](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) on how to create and publish your own component library.

[![React Component Library Video Tutorial](https://img.youtube.com/vi/XHQi5a0TmMc/0.jpg)](https://youtu.be/XHQi5a0TmMc)

## Available Scripts

### Create new component folder

```
npm run gc NEW_COMPONENT_NAME
```

### Build the library

```
npm run rollup
```

### Publish the library

```
npm publish
```

### Run tests

```
npm run test
```

### Run storybook locally

```
npm run sb
```

### Build storybook

```
npm run build-storybook

1. Make sure to write tests for any new component you create!
2. Sub-Components that are used specifically for a component we create and are NOT generic, will be placed in the "components" folder of our component.
3. Whenever you delete a component folder, make sure to also remove it's export from the components/index.js file.
If you want to add an svg to any component, use the Icon component