import React from 'react';

const ChatButton = ({photoUrl, name, message}) => {
    return (
        <button
            className="flex flex-row items-center hover:bg-gray-600 rounded-xl p-2 gap-3"
        >
            <div
                className="flex items-center justify-center h-12 w-12 bg-indigo-200 rounded-full"
            >
                <img
                    src={photoUrl}
                    alt={name}
                    className="h-full w-full rounded-full"
                />
            </div>
            <div className="flex flex-col items-start gap-1">
                <div className="text-sm font-semibold">{name}</div>

                <div className="text-sm font-light">{message}</div>
            </div>
        </button>
    );
};

export default ChatButton;