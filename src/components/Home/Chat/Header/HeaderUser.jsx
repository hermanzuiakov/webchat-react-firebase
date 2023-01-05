import React from 'react';

const HeaderUser = ({name}) => {
    return (
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <span className="flex items-center font-bold">
                {name}
            </span>
        </div>
    );
};

export default HeaderUser;