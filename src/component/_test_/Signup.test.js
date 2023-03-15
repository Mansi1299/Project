import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Signup from "../Signup";
import { MemoryRouter } from "react-router-dom";
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));
  
  test("renders the Signup component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
   
  });
describe("Signup Component", () => {
  it("should render Signup component", () => {
    render(<Signup />);
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  it("should submit form when Sign up button is clicked", () => {
    render(<Signup />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByText("Sign up");

    fireEvent.change(emailInput, { target: { value: "eve.holt@reqres.in" } });
    fireEvent.change(passwordInput, { target: { value: "pistol" } });
    fireEvent.click(signUpButton);

    
  });
});
