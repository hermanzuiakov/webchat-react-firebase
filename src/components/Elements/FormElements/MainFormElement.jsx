import React from 'react';
import TextLabel from "../Labels/TextLabel";
import TextInput from "../Inputs/TextInput";

const MainFormElement = ({text, id, placeholder, type}) => {
    return (
        <div>
            <TextLabel
                id={id}
                text={text}
            />

            <TextInput
                id={id}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
};

export default MainFormElement;