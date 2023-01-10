import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import IconToggleOpen from '../../assets/icons/toggle-open.svg';

export default {
  title: 'BrowzwearComponentLibrary/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

//Icon stories
export const BasicIcon = Template.bind({});
BasicIcon.args = {
  Icon: IconToggleOpen
};
