---
to: <%= directory %>/<%= name %>/<%= name %>.test.tsx
---

import { render, screen } from '@testing-library/react';
import { <%= name %> } from './<%= name %>';

describe('<%= name %>', () => {
  it('should render without crashing', () => {
    render(<<%= name %> />);
    const component = screen.getByTestId('<%= name.toLowerCase() %>-container');
    expect(component).toBeDefined();
  });

  // Add more test cases as needed
});