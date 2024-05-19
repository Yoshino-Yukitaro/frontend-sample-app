import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodoCard } from ".";
import { userEvent } from "@storybook/test";

test('renders TodoCard component', () => {
  render(<TodoCard title="Todo" completed={true} testId="todo-card-test" />);

  const checkboxElement = screen.getByRole("checkbox");
  const todoContainerElement = screen.getByTestId("todo-card-test");

  userEvent.click(checkboxElement);
  expect(todoContainerElement).toHaveStyle({ backgroundColor: '#888888;' });
});
