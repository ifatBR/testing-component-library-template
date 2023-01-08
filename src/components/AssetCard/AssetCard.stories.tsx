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
  desc: 'Very hight hills pink shoe',
  thumb: {} as IAssetThumb,
  metadata: 'string',
  provider_id: 'string',
  version: 'string',
  type_id: 'string',
  parent_ids: ['Stiletto'],
  file: {} as IAssetFile,
}

//AssetCard stories
export const BasicAssetCard = Template.bind({});
BasicAssetCard.args = {
  asset: asset
};
