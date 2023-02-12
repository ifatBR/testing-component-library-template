const fs = require('fs');
const { component, story, test, index, styled } = require('./component_templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler)
// storybook.jsx
fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, index(name), writeFileErrorHandler);
// styled.tsx
fs.writeFile(`${dir}/styled.tsx`, styled(name), writeFileErrorHandler);
//Create components folder
fs.mkdirSync(`${dir}/components`);

fs.readFile('./src/components/index.ts', 'utf8', function(err, data) {
    if (err) throw err;
 
    // grab all components and combine them with new component
    const currentComponents = data.match(/(?<=export { default as )(.*?)(?=} from)/g);
    const exportExists = currentComponents.includes(name);
    const newComponents = exportExists ?  currentComponents : [name, ...currentComponents].sort();
  
    // create the export
    const exportStatements = newComponents
      .map(exportName => `export ${`{ default as ${exportName}}`} from './${exportName}';\n`)
      .join('');
  
    fs.writeFile(`./src/components/index.ts`, exportStatements, writeFileErrorHandler);
  });