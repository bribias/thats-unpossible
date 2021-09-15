import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
    <button onClick={onClick}
        aria-label='quote-button'>
        Load Quote
    </button>
);

Load.PropTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Load;