import { render, screen } from "@testing-library/react";
import Hero from "./sections/Hero";
import { ThemeProvider } from "./context/ThemeContext";
import { expect } from "vitest";

// Mock ResizeObserver for tests
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Hero Section", () => {
  test("renders the hero section with correct content", () => {
    render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>,
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Vivian O");

    const aboutText = screen.getByText(/I'm an undergraduate double-majoring/i);
    expect(aboutText).toBeInTheDocument();

    const toggleButton = screen.getByRole("button");
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent(/Dark|Light/);
  }); // <-- closing parenthesis was missing
});
