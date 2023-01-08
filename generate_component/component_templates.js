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
import { render } from '@testing-library/react';

import ${name} from './${name}';

describe('${name} Component', () => {
  test('Render the ${name} component', () => {
    render(<${name} />);
  });
});
`;

// index.ts
exports.index = name => `export { default } from "./${name}"`;

// styled.tsx
exports.styled = name => `import styled from 'styled-components';

export const ${name}ContainerStyled = styled.div\`\`;`;
