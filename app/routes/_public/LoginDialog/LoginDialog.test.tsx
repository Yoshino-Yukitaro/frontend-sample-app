import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LoginDialog } from ".";

test('renders LoginDialog component', () => {
  render(<LoginDialog />);

  const titleElement = screen.getByRole( "heading", { level: 2, name: /LoginDialogコンポーネントです/i });

  expect(titleElement).toBeInTheDocument();
});
