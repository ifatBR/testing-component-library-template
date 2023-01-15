import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationTree from './NavigationTree';

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
  onNodeClick: (node) => console.log('double click', node.name),
  onNodeToggleClick: (node) => console.log('toggle', node.name),
  treeNodeNameStyle: {color: 'darkGrey', border: '1px solid transparent'},
  treeNodeNameActiveStyle: {fontWeight: 'bold', color: 'cadetBlue', borderRadius: '3px', borderColor: '#9fc4c6'},
  treeNodeMarkedStyle: {backgroundColor: '#fff0b3'},
  toggleIconProps: {fillColor: "cadetBlue", height: 12, width: 12},
  toggleIconStyle: {
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    cursor: 'pointer',
  }
};
