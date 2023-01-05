import React from 'react';

const Link = ({linkUrl, linkClasses, linkText}) => {
    return (
        <a
            href={linkUrl}
            className={`font-medium text-primary-600 hover:underline dark:text-primary-500 ${linkClasses}`}
        >
            {linkText}
        </a>
    );
};

export default Link;