import React from "react";
import { findByText, fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.queryByText("Checkout Form");
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    // fistName
    const firstName = screen.queryByLabelText("First Name:");
    fireEvent.change(firstName, { target: { value: 'UserFirstName' } });
    expect(firstName.value).toBe('UserFirstName')
    // lastName
    const lastName = screen.queryByLabelText("Last Name:");
    fireEvent.change(lastName, { target: { value: 'UserLastName' } });
    expect(lastName.value).toBe('UserLastName')
    // address
    const address = screen.queryByLabelText("Address:");
    fireEvent.change(address, { target: { value: 'street 32' } });
    expect(address.value).toBe('street 32')
    // city
    const city = screen.queryByLabelText("City:");
    fireEvent.change(city, { target: { value: 'LA' } });
    expect(city.value).toBe('LA')
    // state
    const state = screen.queryByLabelText("State:");
    fireEvent.change(state, { target: { value: 'CA' } });
    expect(state.value).toBe('CA')
    // zip
    const zip = screen.queryByLabelText("Zip:");
    fireEvent.change(zip, { target: { value: '90001' } });
    expect(zip.value).toBe('90001')
    // submit
    const button = screen.getByRole('button');
    fireEvent.click(button); 
    //success message
    const successMessage = screen.getByTestId("successMessage")
});
