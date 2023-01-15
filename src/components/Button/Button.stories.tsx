import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
  onClick: () => console.log("ok")
};
HelloWorld.decorators = [
  (Story) => (
    <div style={{marginTop: '50px'}}>
      <Story />
    </div>
  )
]

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};