import React from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuotes } from '../services/simpsonsAPI';

const SimpsonQuote = () => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);
}