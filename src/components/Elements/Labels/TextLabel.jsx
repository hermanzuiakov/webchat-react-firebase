import React from 'react';

const TextLabel = ({id, text}) => {
    return (
        <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            {text}
        </label>
    );
};

export default TextLabel;