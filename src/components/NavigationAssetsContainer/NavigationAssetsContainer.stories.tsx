import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationAssetsContainer from './NavigationAssetsContainer';

export default {
  title: 'BrowzwearComponentLibrary/NavigationAssetsContainer',
  component: NavigationAssetsContainer,
} as ComponentMeta<typeof NavigationAssetsContainer>;

const currentNode = {
  _id: 'stiletto',
  name: 'stiletto',
  parent_id: 'shoes',
  has_children: true,
  children: [
    {
      _id: 'vinyl',
      name: 'vinyl',
      parent_id: 'stiletto',
      has_children: false,
    },
    {
      _id: 'leather',
      name: 'leather',
      parent_id: 'stiletto',
      has_children: false,
    },
    {
      _id: 'sateen',
      name: 'sateen',
      parent_id: 'stiletto',
      has_children: false,
    },
  ]
};

const Template: ComponentStory<typeof NavigationAssetsContainer> = (args) => <NavigationAssetsContainer {...args} />;

//NavigationAssetsContainer stories
export const BasicNavigationAssetsContainer = Template.bind({});
BasicNavigationAssetsContainer.args = {
  currentNode,
};
