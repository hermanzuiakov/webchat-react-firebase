import React from 'react';
import {FiSend} from "react-icons/fi";
import {BsEmojiLaughing} from "react-icons/bs";
import {GrAttachment} from "react-icons/gr";

const MessageInput = () => {
    return (
        <div
            className="flex gap-4 flex-row items-center h-16 rounded-xl w-full px-4 bg-gray-700"
        >
            <div>
                <button
                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                    <GrAttachment />
                </button>
            </div>
            <div className="flex-grow">
                <div className="relative w-full">
                    <input
                        type="text"
                        className="flex w-full border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-gray-700"
                    />
                    <button
                        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                        <BsEmojiLaughing />
                    </button>
                </div>
            </div>
            <div>
                <button
                    className="flex items-center gap-2 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    <span>Send</span>
                    <span>
                        <FiSend />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default MessageInput;