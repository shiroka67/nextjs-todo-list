---
to: <%= directory %>/<%= name %>.test.ts
---

import { <%= name %> } from './<%= name %>';

describe('<%= name %>', () => {
  it('test', () => {
    const resut = <%= name %>("test");
  });

  // Add more test cases as needed
});