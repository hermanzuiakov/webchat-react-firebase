import React from 'react';

const Message = ({text, photoUrl, isUser}) => {
    return (
        <div className={`flex items-center justify-start ${isUser ? "" : "flex-row-reverse"}`}>
            <div className={`flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0`}>
                <img
                    src={photoUrl}
                    alt=""
                />
            </div>
            <div className={`relative mr-3 text-sm ${isUser ? "bg-gray-700 text-white" : "bg-blue-600 text-white"} py-2 px-4 shadow rounded-xl`}>
                <div>{text}</div>
            </div>
        </div>
    );
};

export default Message;