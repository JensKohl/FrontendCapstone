import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingPage';
import {BrowserRouter as Router} from 'react-router-dom';


describe("Test Submit Button present", () => {
    test('renders a submit button', () => {
        const {getByText} = render(
            <Router>
                <BookingForm />
            </Router>);
        expect(getByText("SUBMIT")).toBeInTheDocument();
      });

});

describe("Test Submit Button is disabled", () => {
    test('renders a submit button', () => {
        // get the submit button
        const {getByText} = render(
            <Router>
                <BookingForm />
            </Router>);

        const submitButton = getByText("SUBMIT");
        //expect(submitButton).toHaveAttribute('enabled'); --> this test would faild
        expect(submitButton).toHaveAttribute('disabled');

        
      });
});

describe("Test Fire Button doesnt work", () => {
    test('renders a submit button', () => {
        // get the submit button
        const {getByText} = render(
            <Router>
                <BookingForm />
            </Router>);

        const submitButton = getByText("SUBMIT");
        expect(fireEvent.click(submitButton)).not.toHaveBeenCalled()

      });
});
