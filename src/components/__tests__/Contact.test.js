import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us description of grouoping", () => {
  test("Description of Contact", () => {
    render(<Contact />);

    const contact = screen.getByRole("heading");

    expect(contact).toBeInTheDocument();
  });

  test("Description of Contact to check button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
