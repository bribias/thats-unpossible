import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(
        'https://thesimpsonsquoteapi.glitch.me/quotes',
        (req, res, ctx) => {
            return res(
                ctx.json([{ quote: 'And this is the snack holder where I can put my beverage or, if you will, cupcake.', character: 'Homer Simpson', image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939' }])
            );
        }
    )
);

describe('Simpsons quote', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('displays a button and fetches a quote on click', async () => {
        render(<SimpsonsQuote />);

        const button = screen.getByRole('button', { name: 'quote-button' });
        fireEvent.click(button);

        return waitFor(() => {
            screen.getByText('And this is the snack holder where I can put my beverage or, if you will, cupcake. - Homer Simpson')
        });
    });
});