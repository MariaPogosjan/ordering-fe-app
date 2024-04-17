import React from 'react';

const Label = ({ htmlFor, labelName }) => {
    return (
        <label htmlFor={htmlFor} className="flex items-center w-1/4 mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
            {labelName}
        </label>
    );
};

export default Label;