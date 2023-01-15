import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AssetCard from './AssetCard';
import { IAssetFile, IAssetThumb } from '../../utils/types';

export default {
  title: 'BrowzwearComponentLibrary/AssetCard',
  component: AssetCard,
} as ComponentMeta<typeof AssetCard>;

const Template: ComponentStory<typeof AssetCard> = (args) => <AssetCard {...args} />;

const asset = {
  id: 'high_hills_1',
  name: 'High hills',
  resource: 'string',
  desc: 'High hills pink shoes',
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
};

//AssetCard stories
export const BasicAssetCard = Template.bind({});
BasicAssetCard.args = {
  asset: asset,
  cardStyleAsset: {width: '100px', padding: '6px', borderRadius: '5px'},
  cardHoverStyle: {opacity: '0.5'},
  cardImageStyle: {borderRadius: '5px' },
  onAssetClick: (asset) =>  console.log(asset.name),
  onDownload: (id) => console.log(id)
};
