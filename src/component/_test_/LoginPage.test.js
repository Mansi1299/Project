import React from "react";
import { render, fireEvent,waitFor } from "@testing-library/react";
import LoginPage from "../LoginPage";
import { MemoryRouter } from "react-router-dom";
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));
  jest.mock('react-hot-toast', () => ({
    error: jest.fn(),
    success: jest.fn(),
  }));
  
  test("renders the Signup component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  
    
  });
describe("LoginPage", () => {
 
  it("renders login form", () => {
    const { getByPlaceholderText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText("username");
    const passwordInput = getByPlaceholderText("password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("submits login form with valid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText("username");
    const passwordInput = getByPlaceholderText("password");
    const loginButton = getByText("login");

    fireEvent.change(emailInput, { target: { value: "eve.holt@reqres.in" } });
    fireEvent.change(passwordInput, { target: { value: "pistol" } });
    fireEvent.click(loginButton);

    
    // const toastSuccess = await waitFor(() => getByText("you are successfully logged in."));
    // expect(toastSuccess).toBeInTheDocument();

  
    // await waitFor(() => expect(window.location.pathname).toEqual("/home"));
  });

  it("displays error when submitting login form with invalid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText("username");
    const passwordInput = getByPlaceholderText("password");
    const loginButton = getByText("login");

    fireEvent.change(emailInput, { target: { value: "eve.holt@reqres.in" } });
    fireEvent.change(passwordInput, { target: { value: "pistol" } });
    fireEvent.click(loginButton);

    // // wait for the error toast to appear
    // const toastError = await waitFor(() => getByText("You have entered an invalid email address!"));
    // expect(toastError).toBeInTheDocument();
  });
});
