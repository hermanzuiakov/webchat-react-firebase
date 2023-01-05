import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

const Home = () => {
    return (
        <main className={"w-full h-screen flex"}>
            <Sidebar />

            <Chat />
        </main>
    );
};

export default Home;