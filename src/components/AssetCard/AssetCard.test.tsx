import React from 'react';
import { render } from '@testing-library/react';

import AssetCard from './AssetCard';

describe('AssetCard Component', () => {
  test('Render the AssetCard component', () => {
    render(<AssetCard />);
  });
});
