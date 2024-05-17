import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PublicHeader } from ".";

test('renders PublicHeader component', () => {
  render(<PublicHeader />);

  const titleElement = screen.getByRole( "heading", { level: 2, name: /PublicHeaderコンポーネントです/i });

  expect(titleElement).toBeInTheDocument();
});
