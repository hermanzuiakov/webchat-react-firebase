import React from 'react';
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatWrapper = () => {
    return (
        <div className="flex flex-row h-full w-full overflow-x-hidden overflow-y-auto">
            <div className="flex flex-col flex-auto h-full">
                <div
                    className="flex flex-col flex-auto flex-shrink-0 bg-gray-900 h-full p-4"
                >
                    <div className="flex flex-col h-full overflow-x-auto">
                        <div className="flex flex-col h-full">
                            <div className="flex gap-y-3 flex-col">
                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={true} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={true} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={false} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={true} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={false} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={true} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={false} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={true} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={false} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={true} />

                                <Message text={"ssfdfdggd"} photoUrl={"https://cdn-icons-png.flaticon.com/512/1/1247.png"} isUser={false} />
                            </div>
                        </div>
                    </div>

                    <MessageInput />
                </div>
            </div>
        </div>
    );
};

export default ChatWrapper;