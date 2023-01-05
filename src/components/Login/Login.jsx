import React from 'react';
import Headline from "../Elements/Titles/Headline";
import MainFormElement from "../Elements/FormElements/MainFormElement";
import MainButton from "../Elements/Buttons/MainButton";
import Link from "../Elements/Links/Link";
import SocialButton from "../Elements/Buttons/SocialButton";
import {FaFacebookF, FaGoogle, FaTwitter} from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div
                    className="p-6 space-y-4 md:space-y-6 sm:p-8"
                >
                    <Headline text="Login to your account" />

                    <div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-4">
                            Login via:
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

                    <form className="space-y-4 md:space-y-6" action="#">
                        <MainFormElement text={'Your email'} id={'email'} placeholder={'name@company.com'} type={'email'} />

                        <MainFormElement text={'Password'} id={'password'} placeholder={'•••••••'} type={'password'} />

                        <MainButton type={"submit"} text={"Login"} />

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have account yet?

                            <Link linkUrl={"/"} linkText={"Register here"} linkClasses={"ml-1"} />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;