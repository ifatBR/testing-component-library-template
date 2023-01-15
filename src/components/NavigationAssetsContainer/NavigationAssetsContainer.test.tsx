import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './NavigationAssetsContainer.stories'; // import all stories from the stories file
const { BasicNavigationAssetsContainer} = composeStories(stories);

describe('NavigationAssetsContainer Component', () => {
  test('Render the NavigationAssetsContainer component', () => {
    render(<BasicNavigationAssetsContainer />);
  });
});
