import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/Navbar";
import '@testing-library/jest-dom';


jest.mock('next/link', () => {
    // eslint-disable-next-line react/display-name
    return ({ children, href }) => {
      return <a href={href}>{children}</a>;
    };
  });

Navbar.displayName = "Navbar";

describe("Navbar", () => {
  it("renders navbar links correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Newsletter")).toBeInTheDocument();
  });

  it("has correct href attributes for links", () => {
    render(<Navbar />);

    const homeLink = screen.getByText("Home");
    const productsLink = screen.getByText("Products");
    const newsletterLink = screen.getByText("Newsletter");

    expect(homeLink).toHaveAttribute('href', '/');
    expect(productsLink).toHaveAttribute("href", "/products");
    expect(newsletterLink).toHaveAttribute("href", "/newsletter");
  });
});
