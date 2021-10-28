import React from 'react';
import PropTypes from 'prop-types';
import './AdmitButton.css';

function AdmitButton(props) {
    const { name, handleClick } = props;
    return (
        <div className='admit-button' onClick={handleClick}>
            {name}
        </div>
    )
}

AdmitButton.defaultProps = {
    handleClick: () => {},
}

AdmitButton.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default AdmitButton

