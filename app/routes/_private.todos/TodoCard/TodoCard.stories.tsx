import type { Meta, StoryObj } from '@storybook/react';
import { TodoCardPresenter } from './TodoCardPresenter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'routes/_private.todos/TodoCard',
  component: TodoCardPresenter,
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
} satisfies Meta<typeof TodoCardPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'タイトル',
    completed: false,
    onChange: () => {
      console.log('チェックボックスがクリックされました');
    }
  },
};

export const Completed: Story = {
  args: {
    title: 'タイトル',
    completed: true,
    onChange: () => {
      console.log('チェックボックスがクリックされました');
    }
  },
};
