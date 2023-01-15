import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HighlightedTitle from './HighlightedTitle';

export default {
  title: 'BrowzwearComponentLibrary/HighlightedTitle',
  component: HighlightedTitle,
} as ComponentMeta<typeof HighlightedTitle>;

const Template: ComponentStory<typeof HighlightedTitle> = (args) => <HighlightedTitle {...args} />;

//HighlightedTitle stories
export const BasicHighlightedTitle = Template.bind({});
BasicHighlightedTitle.args = {
  title:"Highlight part of this text",
  highlight:"part o"
};
