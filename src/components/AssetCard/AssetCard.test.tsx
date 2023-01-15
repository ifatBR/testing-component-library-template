import React from 'react';
import { render } from '@testing-library/react';

import AssetCard from './AssetCard';
import { IAssetFile, IAssetThumb } from '../../utils/types';

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


describe('AssetCard Component', () => {
  test('Render the AssetCard component', () => {
    render (<AssetCard asset={asset} />);
  });
});

