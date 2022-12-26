import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button1 } from './Button1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button1',
  component: Button1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button1> = (args) => <Button1 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button1',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button1',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button1',
};
