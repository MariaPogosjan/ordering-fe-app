import React from 'react';

const Button = ({ type, buttonLabel }) => {
    return (
        <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonLabel}
        </button>
    );
};

export default Button;
