import { useState } from "react";
import AuthForm from "./AuthForm";

const Login = ({ modalStatus }) => {
  let [signupStatus, setSignupSts] = useState(false);

  const signupFromStsTrue = () => {
    setSignupSts(true);
  };
  const signupFromStsFalse = () => {
    setSignupSts(false);
  };
  return (
    <>
      {/* Heading */}

      {/* Wrapper */}
      <div className="mt-6 px-8">
        <h5 className=" flex items-center justify-center text-[33px] font-semibold leading-[140%] tracking-[0.99px] p-3 ">
          Login to using Expense Tracker
        </h5>
        {/* Form -> we are reusing the AuthForm, making it dynamic with a prop called 'isLoginForm', if set false, it will display signup form */}
        <AuthForm
          isLoginForm={true}
          modalStatus={modalStatus}
          signupStatus={signupStatus}
        />

        {/* some horizontal underlines under button */}
        {/* Could also separate this into a different component, for now just repeating the same in login component too */}
        <div className="my-3 flex items-center">
          <div className="h-[1px] w-full bg-base-100"></div>
          <p className="text-[15px] font-medium leading-[150%]">OR</p>
          <div className="h-[1px]  w-full bg-base-100"></div>
        </div>

        {/* The bottom part of the signup form */}
        {signupStatus || (
          <div className="my-2 flex flex-col gap-1.5 ">
            <p className=" text-center text-[17px] font-normal tracking-[160%] ">
              Don't have an account?
            </p>
            <button onClick={signupFromStsTrue}>Sign up</button>
          </div>
        )}

        {signupStatus && (
          <div className="my-2 flex flex-col gap-1.5">
            <p className=" text-center text-[17px] font-normal tracking-[160%] ">
              Have an account?
            </p>
            <button onClick={signupFromStsFalse}>Log in</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
