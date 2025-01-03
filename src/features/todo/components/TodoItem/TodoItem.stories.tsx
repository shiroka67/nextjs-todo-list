import { todoItem } from "@/data/todo";
import { TodoItem } from "@/features/todo/components/TodoItem/TodoItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TodoItem> = {
	component: TodoItem,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Todo: Story = {
	args: { ...todoItem },
};
