import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationTree from './NavigationTree';
import IconChat from '../../assets/icons/chat.svg';

export default {
  title: 'BrowzwearComponentLibrary/NavigationTree',
  component: NavigationTree,
} as ComponentMeta<typeof NavigationTree>;;

const Template: ComponentStory<typeof NavigationTree> = (args) => <NavigationTree {...args} />;

const treeData = {
  _id: 'shoes',
  name: 'Shoes',
  has_children: true,
  children: [
    {
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
    },
    {
      _id: 'flats',
      name: 'flats',
      parent_id: 'shoes',
      has_children: true,
      children: [
        {
          _id: 'ballet',
          name: 'ballet',
          parent_id: 'flats',
          has_children: false,
        },
        {
          _id: 'sneakers',
          name: 'sneakers',
          parent_id: 'flats',
          has_children: false,
        },
      ]
    },
  ],
};

let currentNode = treeData.children[1];
export const BasicNavigationTree = Template.bind({});
BasicNavigationTree.args = {
  treeData,
  currentNode,
  onNodeClick: (node) => console.log('click'),
  onNodeToggleClick: () => console.log('toggle'),
  treeNodeNameStyle: {color: 'darkGrey'},
  treeNodeNameActiveStyle: {fontWeight: 'bold', color: 'white', borderRadius: '3px', backgroundColor: 'grey'},
  treeNodeMarkedStyle: {backgroundColor: 'lightBlue'}
};
