import React from 'react';
import { render } from '@testing-library/react';

import NavigationTree from './NavigationTree';

describe('NavigationTree Component', () => {
  test('Render the NavigationTree component', () => {
    render(<NavigationTree />);
  });
});
