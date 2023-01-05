import React from 'react';

const Headline = ({text}) => {
    return (
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            {text}
        </h1>
    );
};

export default Headline;