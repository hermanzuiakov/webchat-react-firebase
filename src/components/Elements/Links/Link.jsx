import React from 'react';

const Link = ({linkUrl, linkClasses, linkText}) => {
    return (
        <a
            href={linkUrl}
            className={`font-medium hover:underline ${linkClasses}`}
        >
            {linkText}
        </a>
    );
};

export default Link;