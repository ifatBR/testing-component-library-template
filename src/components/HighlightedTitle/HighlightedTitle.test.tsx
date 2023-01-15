import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './HighlightedTitle.stories';

const { BasicHighlightedTitle } = composeStories(stories);

describe('HighlightedTitle Component', () => {
  test('Render the HighlightedTitle component', () => {
    render(<BasicHighlightedTitle/>);
    const titleElement = screen.getByText('Highlight', {exact: false})
    expect(titleElement).not.toBeNull();
  });
});

describe('HighlightedTitle Component', () => {
  test('Verify title is split according to highlighted part', () => {
    render(<BasicHighlightedTitle
      title="Testing highlight split"
      highlight="hlight sp"
  />);
    const titleElement_01 = screen.getByText('Testing hig');
    const titleElement_02 = screen.getByText('hlight sp');
    const titleElement_03 = screen.getByText('lit');
    expect(titleElement_01).not.toBeNull();
    expect(titleElement_02).not.toBeNull();
    expect(titleElement_03).not.toBeNull();
  });
});

describe('HighlightedTitle Component', () => {
  test('Verify title doesnt split if highlighted part isnt found', () => {
    render(<BasicHighlightedTitle
      title="Testing highlight split"
      highlight="bla"
  />);

    const titleElement = screen.getByText('Testing highlight split');
    expect(titleElement).not.toBeNull();
  });
});
