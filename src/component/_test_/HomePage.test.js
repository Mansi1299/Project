import React from 'react'
import { render } from "@testing-library/react";
import Homepage from "../Homepage";
describe("LoginPage", () => {
    it("renders login form", () => {  
        const { getByPlaceholderText } = render(<Homepage />);
        const emailInput = getByPlaceholderText("Search..");
        expect(emailInput).toBeInTheDocument();
    })
})
 