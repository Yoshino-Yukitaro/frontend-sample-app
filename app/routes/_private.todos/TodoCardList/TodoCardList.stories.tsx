import type { Meta, StoryObj } from '@storybook/react';
import { TodoCardListPresenter } from './TodoCardListPresenter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'routes/_private.todos/TodoCardList',
  component: TodoCardListPresenter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['routes/_private.todos'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
} satisfies Meta<typeof TodoCardListPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    todoList: [
      { id: 1, title: 'タイトル1', completed: false },
      { id: 2, title: 'タイトル2', completed: true },
    ]
  },
};
