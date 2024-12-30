---
to: <%= directory %>/use<%= name %>.tsx
---

import { useState } from 'react';

export const use<%= name %> = (initialValue) => {
  const [state, setState] = useState(initialValue);

  return [state, setState];
};