import React from 'react';
import { render } from '@testing-library/react';

import NavigationTree from './NavigationTree';
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
describe('NavigationTree Component', () => {
  test('Render the NavigationTree component', () => {
    render(
    <NavigationTree treeData={treeData} 
      onNodeClick={(node) => console.log('double click')}
      onNodeToggleClick={() => console.log('toggle')}
    />);
  });
});
