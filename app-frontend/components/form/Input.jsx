import React from 'react';

const Input = ({ id, type }) => {
    return (
        <input 
            id={id} 
            type={type}  
            className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    );
};

export default Input;

