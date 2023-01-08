import React from 'react';
import { render } from '@testing-library/react';

import HighlightedTitle from './HighlightedTitle';

describe('HighlightedTitle Component', () => {
  test('Render the HighlightedTitle component', () => {
    render(<HighlightedTitle title="Highlight some of this" highlight="some o"/>);
  });
});
