import React from 'react';

const FileInput = ({id}) => {
    return (
        <input
            type="file"
            name={id}
            id={id}
            className="opacity-0 absolute"
        />
    );
};

export default FileInput;