import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories'; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { HelloWorld, ClickMe } = composeStories(stories);

test('renders HelloWorld button with default args', () => {
  render(<HelloWorld />);
  const buttonElement = screen.getByText(
    /Hello world!/i
  );
  expect(buttonElement).not.toBeNull();
});

test('ConClick handler is called', () => { //Testing with a mock function
  const onClickSpy = jest.fn();
  render(<HelloWorld onClick={onClickSpy}/>);
  const buttonElement = screen.getByRole('button');
  buttonElement.click();
  expect(onClickSpy).toHaveBeenCalled();
});

test('renders ClickMe button with default args', () => {
  render(<ClickMe />);
  const buttonElement = screen.getByText(
    /Click me!/i
  );
  expect(buttonElement).not.toBeNull();
});

test('Check button label', () => { //Test component text
  render(<ClickMe />);
  const buttonElement = screen.getByText(
    /Click me!/i
  );
  expect(buttonElement.textContent).toEqual(ClickMe.args!.label);
});