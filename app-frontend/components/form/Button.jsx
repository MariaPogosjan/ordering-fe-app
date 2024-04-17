import React from 'react';

const Button = ({ type, buttonLabel,  onBack, classes, disabled }) => {
    return (
        <button 
            type={type} 
            onClick={onBack}
            disabled={disabled}
            className={`${classes} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4`}
        >
            {buttonLabel}
        </button>
    );
};

export default Button;
