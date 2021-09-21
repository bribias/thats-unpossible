export const fetchQuotes = async () => {

    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');

    const [quote] = await res.json();

    return {
        text: quote.quote,
        character: quote.character,
        image: quote.image,
    };
};