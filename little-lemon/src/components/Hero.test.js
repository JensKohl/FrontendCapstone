import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import HeroForm from './Hero';


describe("HeroForm Unit Tests", () => {
    test('renders a submit button', () => {
        const {getByText} = render(
            <Router>
                <HeroForm />
            </Router>);
        expect(getByText("Reserve a table")).toBeInTheDocument();
      });

});