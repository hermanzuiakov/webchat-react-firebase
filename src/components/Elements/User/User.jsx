import React from 'react';
import Link from "../Links/Link";

const User = ({photoUrl, name}) => {
    return (
        <div
            className="flex items-center bg-gray-600 w-full py-2 px-3 rounded-lg gap-2"
        >
            <div className="h-14 w-14 rounded-full border overflow-hidden">
                <img
                    src={photoUrl}
                    alt="Avatar"
                    className="h-full w-full"
                />
            </div>
            <div className="text-sm font-semibold flex flex-col gap-0.5">
                {name}
                <Link linkText={"Logout"} linkUrl={"/"}/>
            </div>
        </div>
    );
};

export default User;