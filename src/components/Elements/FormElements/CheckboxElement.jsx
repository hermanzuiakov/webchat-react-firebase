import React from 'react';
import Checkbox from "../Inputs/Checkbox";
import CheckboxLabel from "../Labels/CheckboxLabel";

const CheckboxElement = ({id, link, linkClasses, linkText, linkUrl}) => {
    return (
        <div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <Checkbox id={id}/>
                </div>
                <div className="ml-3 text-sm">
                    <CheckboxLabel id={id} link={link} linkClasses={linkClasses} linkText={linkText} linkUrl={linkUrl} />
                </div>
            </div>
        </div>
    );
};

export default CheckboxElement;