import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Test Cases for the Header Component", () => {
  it("With a Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const login = screen.getByRole("button", { name: "Login" });

    expect(login).toBeInTheDocument();
  });

  it("With a Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const login = screen.getByText("Cart:0 items");

    expect(login).toBeInTheDocument();
  });

  it("With a Cart Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //regular expression
    const login = screen.getByText(/Cart/);

    expect(login).toBeInTheDocument();
  });

  it("With a Login Button to Logout Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const login = screen.getByRole("button", { name: "Login" });

    fireEvent.click(login);

    const logout = screen.getByRole("button", { name: "Logout" });

    expect(logout).toBeInTheDocument();
  });
});
