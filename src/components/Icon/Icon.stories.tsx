import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import IconToggleClosed from '../../assets/icons/toggle-closed.svg';

export default {
  title: 'BrowzwearComponentLibrary/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  icon: IconToggleClosed,
  width: 15,
  height: 15
};