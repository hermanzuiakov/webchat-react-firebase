import React from 'react';
import Headline from "../../Elements/Titles/Headline";
import ChatButton from "../../Elements/Buttons/ChatButton";
import SearchForm from "../../Elements/FormElements/SearchForm";
import User from "../../Elements/User/User";

const Sidebar = () => {
    return (
        <div className="flex flex-col py-8 px-6 w-96 bg-gray-800 flex-shrink-0 h-screen text-white space-y-4">
            <div className="flex flex-row w-full">
                <Headline text={"Chats"}/>
            </div>

            <User photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} name={"Henry Ford"}/>

            <SearchForm />

            <div className="flex flex-col">
                <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    <ChatButton name={"Henry Ford"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} message={"Hello"}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;