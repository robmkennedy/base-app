import { describe, expect, it } from 'vitest';
import { render, screen } from '@test/testUtils';
import { SearchPage } from '@features/search/components/SearchPage/SearchPage';
import { fireEvent, waitFor } from '@testing-library/react';

describe('SearchPage', () => {

    it('renders search page', () => {
        render(<SearchPage />);
        const label = screen.getByText('Enter Search Term');
        const button = screen.getByRole('button', { name: /search/i });
        const input = screen.getByRole('textbox');

        expect(label).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    it('returns search data', () => {
        render(<SearchPage />);

        const button = screen.getByRole('button', { name: /search/i });
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test input' } });

        const inputFilled = screen.getByDisplayValue('test input');
        expect(inputFilled).toBeInTheDocument();

        fireEvent.click(button);

        waitFor(() => {
            expect(screen.getByText('Rob (May)')).toBeInTheDocument();
            expect(screen.getByText('Mary (June)')).toBeInTheDocument();
        });
    });
});
