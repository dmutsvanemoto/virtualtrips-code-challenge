import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBox } from './SearchBox';

const labelText = "Search Cities";
const onChange = jest.fn();

describe('SearchBox', () => {
    test('should render input', () => {
        render(<SearchBox labelText={labelText} onChange={onChange} />)

        const input = screen.getByTestId("SearchBox-input");

        expect(input).toBeInTheDocument();
    })

    test('should render label text', () => {
        render(<SearchBox labelText={labelText} onChange={onChange} />)

        const label = screen.getByLabelText(labelText);

        expect(label).toBeInTheDocument();
    })

    test('should call onChange', () => {
        let onChange = jest.fn();
        render(<SearchBox labelText={labelText} onChange={onChange} />)

        const input = screen.getByTestId("SearchBox-input");

        userEvent.type(input, "city");

        expect(onChange).toHaveBeenCalledTimes(4);
    })
    
})
