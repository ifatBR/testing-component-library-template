// component.tsx
exports.component = name => `import React from 'react';

export interface I${name}Props {}

const ${name} = (props: I${name}Props) => {
  const {} = props;
  return (
    <div>Hello 👋, I am a ${name} component.</div>
  );
};

export default ${name};
`;

// component.stories.jsx
exports.story = name => `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ${name} from './${name}';

export default {
  title: 'BrowzwearComponentLibrary/${name}',
  component: ${name},
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args) => <${name} {...args} />;

//${name} stories
export const Basic${name} = Template.bind({});
Basic${name}.args = {
  //Here you can use the component props
};
`;

// component.test.tsx
exports.test = name => `import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './${name}.stories'; // import all stories from the stories file

const {  Basic${name} } = composeStories(stories);

test('renders Basic${name} component story with default args', () => {
  const basicElement = render(< Basic${name} />);
  expect(basicElement).not.toBeNull();
});
`;

// index.ts
exports.index = name => `export { default } from "./${name}"`;

// styled.tsx
exports.styled = name => `import styled from 'styled-components';

export const ${name}ContainerStyled = styled.div\`\`;`;
