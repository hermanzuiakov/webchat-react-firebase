import React from 'react';
import Link from "../Links/Link";

const CheckboxLabel = ({id, link, linkText, linkUrl, linkClasses}) => {
    return (
        <label
            htmlFor={id}
            className="font-light text-gray-500 dark:text-gray-300"
        >
            I accept the
            <>
                {link ?
                    <Link linkUrl={linkUrl} linkText={linkText} linkClasses={linkClasses} />

                    :

                    ''
                }
            </>
        </label>
    );
};

export default CheckboxLabel;