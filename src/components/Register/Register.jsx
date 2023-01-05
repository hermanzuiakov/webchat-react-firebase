import React from 'react';
import Headline from "../Elements/Titles/Headline";
import MainFormElement from "../Elements/FormElements/MainFormElement";
import CheckboxElement from "../Elements/FormElements/CheckboxElement";
import MainButton from "../Elements/Buttons/MainButton";
import Link from "../Elements/Links/Link";

const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div
                    className="p-6 space-y-4 md:space-y-6 sm:p-8"
                >
                    <Headline text="Create an account" />
                    <form className="space-y-4 md:space-y-6" action="#">
                        <MainFormElement text={'Your email'} id={'email'} placeholder={'name@company.com'} type={'email'} />

                        <MainFormElement text={'Password'} id={'password'} placeholder={'•••••••'} type={'password'} />

                        <MainFormElement text={'Confirm password'} id={'confirm-password'} placeholder={'•••••••'} type={'password'} />

                        <CheckboxElement link={true} id={"terms"} linkUrl={"/"} linkText={"Terms and conditions"} linkClasses={"ml-1"} />

                        <MainButton type={"submit"} text={"Create an account"} />

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?

                            <Link linkUrl={"/"} linkText={"Login here"} linkClasses={"ml-1"} />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;