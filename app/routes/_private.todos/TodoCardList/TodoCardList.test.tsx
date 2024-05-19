import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodoCardList } from ".";

test('renders TodoCardList component', () => {
  render(<TodoCardList />);

  const titleElement = screen.getByRole( "heading", { level: 2, name: /TodoCardListコンポーネントです/i });

  expect(titleElement).toBeInTheDocument();
});
