import React from 'react';
import FileInput from "../Inputs/FileInput";
import AvatarUploadLabel from "../Labels/AvatarUploadLabel";
import {BsUpload} from "react-icons/bs";

const AvatarUpload = ({text, id}) => {
    return (
        <div>
            <AvatarUploadLabel id={id}>
                <div className="p-3 border-2 border-white rounded-full">
                    <BsUpload color={"white"} size={18}/>
                </div>

                <p className="text-sm tracking-wider text-gray-400 group-hover:text-gray-600">{text}</p>

                <FileInput id={id} />
            </AvatarUploadLabel>
        </div>
    );
};

export default AvatarUpload;