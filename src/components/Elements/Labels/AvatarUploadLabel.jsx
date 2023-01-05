import React from 'react';

const AvatarUploadLabel = ({children, id}) => {
    return (
        <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
            {children}
        </label>
    );
};

export default AvatarUploadLabel;