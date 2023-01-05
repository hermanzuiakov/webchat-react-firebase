import React from 'react';

const ChatButton = ({photoUrl, name}) => {
    return (
        <button
            className="flex flex-row items-center hover:bg-gray-600 rounded-xl p-2"
        >
            <div
                className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
            >
                <img
                    src={photoUrl}
                    alt={name}
                    className="h-full w-full rounded-full"
                />
            </div>
            <div className="ml-2 text-sm font-semibold">{name}</div>
        </button>
    );
};

export default ChatButton;