import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './NavigationTree.stories';

const { BasicNavigationTree } = composeStories(stories);

describe('NavigationTree Component', () => {
  test('Render the NavigationTree component', () => {
    render(
    <BasicNavigationTree />);
  });
});
