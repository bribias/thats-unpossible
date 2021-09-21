import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuotes } from '../services/simpsonsAPI';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);

        const quote = await fetchQuotes();
        setQuote(quote);
        setLoading(false);
    };

    return (
        <>
            <Load onClick={handleClick} />
            {loading ? (
                <img
                    // eslint-disable-next-line max-len
                    src="https://data.photofunky.net/output/image/5/3/8/7/538748/photofunky.gif" alt="bart-loading-spinner" />
            ) : (
                quote && (
                    <Quote
                        text={quote.text}
                        character={quote.character}
                        image={quote.image}
                    />
                )
            )}
        </>
    );
};

export default SimpsonsQuote;