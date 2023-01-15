import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavigationAssetsContainer from './NavigationAssetsContainer';
import { IAsset, IAssetFile } from '../../utils/types';

export default {
  title: 'BrowzwearComponentLibrary/NavigationAssetsContainer',
  component: NavigationAssetsContainer,
} as ComponentMeta<typeof NavigationAssetsContainer>;

const assets: IAsset[] = [
  {
    id: 'bunny_1',
    name: 'Bunny 1',
    resource: 'string',
    desc: 'White bunny in forest',
    thumb: {
      default: {
        url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        h: 3,
        w: 3,
        _ut: ''
      }
    },
    metadata: 'string',
    provider_id: 'string',
    version: 'string',
    type_id: 'string',
    parent_ids: ['Stiletto'],
    file: {} as IAssetFile,
  },
  {
    id: 'bunny_2',
    name: 'Bunny 2',
    resource: 'string',
    desc: 'Brown bunny in field',
    thumb: {
      default: {
        url: 'https://www.cbc.ca/kids/images/weird_wonderful_bunnies_header_update_1140.jpg',
        h: 3,
        w: 3,
        _ut: ''
      }
    },
    metadata: 'string',
    provider_id: 'string',
    version: 'string',
    type_id: 'string',
    parent_ids: ['Stiletto'],
    file: {} as IAssetFile,
  }
];

const Template: ComponentStory<typeof NavigationAssetsContainer> = (args) => <NavigationAssetsContainer {...args} />;

//NavigationAssetsContainer stories
export const BasicNavigationAssetsContainer = Template.bind({});
BasicNavigationAssetsContainer.args = {
  nodeAssets: assets,
  cardStyleAsset: {width: '100px', padding: '6px', borderRadius: '5px', marginInlineEnd: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'},
  cardImageStyle: {height:'100px', objectFit: 'cover', marginBottom: '10px'}
};
