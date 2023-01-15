import React, {useState} from 'react';
import Headline from "../Elements/Titles/Headline";
import MainFormElement from "../Elements/FormElements/MainFormElement";
import CheckboxElement from "../Elements/FormElements/CheckboxElement";
import MainButton from "../Elements/Buttons/MainButton";
import Link from "../Elements/Links/Link";
import SocialButton from "../Elements/Buttons/SocialButton";
import {FaFacebookF, FaGoogle, FaTwitter} from "react-icons/fa";
import AvatarUpload from "../Elements/FormElements/AvatarUpload";
import {LOGIN_ROUTE} from "../../utils/consts";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {MdErrorOutline} from "react-icons/md";
import {IoMdClose} from "react-icons/io";

const Register = () => {
    const [err, setErr] = useState("")

    const emailRegister = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const displayName = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[4].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async(downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName: displayName,
                            photoURL: downloadURL
                        })

                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoUrl: downloadURL,
                        })
                    } catch (err) {
                        console.log(err.code)
                        if (err.code === "auth/email-already-in-use") {
                            setErr(err.code)
                        } else {
                            setErr(err.code)
                        }
                    }
                });
            });
        } catch (err) {
            console.log(err)
            if (err.code === "auth/email-already-in-use") {
                setErr(err.code)
            } else {
                setErr(err.code)
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div
                    className="p-6 space-y-4 md:space-y-6 sm:p-8"
                >
                    <Headline text="Create an account" />

                    <div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-4">
                            Register via:
                        </p>

                        <SocialButton>
                            <FaGoogle size={18} />
                        </SocialButton>

                        <SocialButton>
                            <FaFacebookF size={18} />
                        </SocialButton>

                        <SocialButton>
                            <FaTwitter size={18} />
                        </SocialButton>
                    </div>

                    {
                        err === "auth/email-already-in-use"
                        &&
                        <div id="alert-1"
                             className="flex p-4 mb-4 text-primary-600 bg-blue-100 rounded-lg dark:bg-gray-700 dark:text-primary-600 items-center"
                             role="alert"
                        >
                            <MdErrorOutline size={18} />

                            <span className="sr-only">Info</span>
                            <div className="ml-2 text-sm font-medium">
                                This account is already exist
                            </div>

                            <button type="button"
                                    className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg items-center justify-center p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-500 text-primary-700 dark:hover:text-primary-600"
                                    onClick={() => setErr('')}
                            >
                                <IoMdClose size={18}/>
                            </button>
                        </div>
                    }

                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={emailRegister}
                    >
                        <MainFormElement text={'Your email'} id={'email'} placeholder={'name@company.com'} type={'email'} />

                        <MainFormElement text={'Your name'} id={'name'} placeholder={'Your name'} type={'name'} />

                        <MainFormElement text={'Password'} id={'password'} placeholder={'•••••••'} type={'password'} />

                        <MainFormElement text={'Confirm password'} id={'confirm-password'} placeholder={'•••••••'} type={'password'} />

                        <AvatarUpload text={'Upload your avatar'} id={'avatar'}/>

                        <CheckboxElement link={true} id={"terms"} linkUrl={"/"} linkText={"Terms and conditions"} linkClasses={"ml-1 text-primary-500"} />

                        <MainButton type={"submit"} text={"Create an account"} />

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?

                            <Link linkUrl={LOGIN_ROUTE} linkText={"Login here"} linkClasses={"ml-1 text-primary-500"} />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;