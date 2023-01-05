import React from 'react';
import HeaderUser from "./HeaderUser";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {FaUserPlus} from "react-icons/fa";
import {TfiMoreAlt} from "react-icons/tfi";

const ChatHeader = () => {
    return (
        <nav className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 w-full z-20 top-0 left-0 text-white border-b border-blue-600 flex ">
            <HeaderUser name={"Henry Ford"} />

            <div className={"flex gap-4"}>
                <button>
                    <BsFillCameraVideoFill size={22} />
                </button>
                <button>
                    <FaUserPlus size={22} />
                </button>
                <button>
                    <TfiMoreAlt size={22} />
                </button>
            </div>
        </nav>
    );
};

export default ChatHeader;