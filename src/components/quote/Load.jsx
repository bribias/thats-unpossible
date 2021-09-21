import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
    <button onClick={onClick}
        aria-label="quote-button">
        PUSH FOR QUOTE
    </button>
);

Load.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Load;