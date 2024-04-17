import React from 'react';

const Input = ({ id, type, register, validation, name  }) => {
    return (
        <input 
            id={id}
            data-testid={id}
            type={type}
            {...register(name, validation)}
            name={name}
            className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    );
};

export default Input;

