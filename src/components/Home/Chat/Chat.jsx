import React from 'react';
import ChatHeader from "./Header/ChatHeader";
import ChatWrapper from "./Messages/ChatWrapper";

const Chat = () => {
    return (
        <section className={"flex flex-col w-full relative"}>
            <ChatHeader />

            <ChatWrapper />
        </section>
    );
};

export default Chat;