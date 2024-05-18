import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {createRemixStub} from '@remix-run/testing';
import '@testing-library/jest-dom';

import { PublicHeader } from ".";

test('renders PublicHeader component', () => {
  const RemixStub = createRemixStub([
    {
      path: '*',
      Component: PublicHeader,
    }
  ]);
  render(<RemixStub />);

  const page1LinkElement = screen.getByRole("link", { name: /他ページ1/i});

  expect(page1LinkElement).toBeInTheDocument();
  expect(page1LinkElement).toHaveAttribute('href', '/page1');
});
