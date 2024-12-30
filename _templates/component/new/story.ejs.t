---
to: <%= directory %>/<%= name %>/<%= name %>.stories.tsx
---


import type { Meta, StoryObj } from '@storybook/react';
 
import { <%= name %> } from './<%= name %>';
 
const meta: Meta<typeof <%= name %>> = {
  component: <%= name %>,
};

export default meta;
type Story = StoryObj<typeof <%= name %>>;
 
export const Primary: Story = {
  args: {
    primary: true,
    label: '<%= name %>',
  },
};