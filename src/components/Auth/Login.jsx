import AuthForm from "./AuthForm";

const Login = () => {
  return (
    <>
      {/* Heading */}

      {/* Wrapper */}
      <div className="mt-6 px-8">
        <h5 className=" flex items-center justify-center text-[33px] font-semibold leading-[140%] tracking-[0.99px] p-3 ">
          Login to using Expense Tracker
        </h5>
        {/* Form -> we are reusing the AuthForm, making it dynamic with a prop called 'isLoginForm', if set false, it will display signup form */}
        <AuthForm isLoginForm={true} />

        {/* some horizontal underlines under button */}
        {/* Could also separate this into a different component, for now just repeating the same in login component too */}
        <div className="my-6 flex items-center gap-[19px]">
          <div className="h-[1px] w-full bg-base-100"></div>
          <p className="text-[15px] font-medium leading-[150%]">OR</p>
          <div className="h-[1px]  w-full bg-base-100"></div>
        </div>

        {/* Social Auth Options */}

        {/* The bottom part of the signup form */}
        <div className="mt-2 flex flex-col gap-1.5 px-8">
          <p className=" text-center text-[17px] font-normal tracking-[160%] ">
            Don't have an account?
          </p>
          <a>Sign up</a>
        </div>
      </div>
    </>
  );
};

export default Login;
