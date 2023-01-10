import React from 'react';
import { render } from '@testing-library/react';
import IconToggleOpen from '../../assets/icons/toggle-open.svg';

import Icon from './Icon';

describe('Icon Component', () => {
  test('Render the Icon component', () => {
render(<Icon Icon={IconToggleOpen}/>);
  });
});
