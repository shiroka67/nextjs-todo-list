---
to: <%= directory %>/use<%= name %>.test.tsx
---
import { renderHook } from "@testing-library/react-hooks";
import { use<%= name %> } from './use<%= name %>';

describe('use<%= name %>', () => {
  it('test', () => {
    const { result } = renderHook(() => use<%= name %>("test"));
  });

  // Add more test cases as needed
});