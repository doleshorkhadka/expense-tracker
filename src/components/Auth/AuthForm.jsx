import FormInput from "./FormInput";

const AuthForm = ({ isLoginForm = false }) => {
  // here isLoginForm prop determines whether it is login form or not, so we can display forgot password option in case it is login form
  return (
    <>
      <FormInput type="email" placeholder="Email address" />
      {isLoginForm && (
        <FormInput type="password" placeholder="Account password" />
      )}
      <div className="mt-6 flex items-center justify-between">
        {isLoginForm && <a>Forgot password?</a>}

        {/* Also we are setting the button's mx-auto className conditionally! If it's a login form, we only need a button and centered! */}
        <button
          className={`inline-block bg-gradient-to-r from-secondary to-secondary-focus capitalize ${
            isLoginForm ? "" : "mx-auto"
          }`}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default AuthForm;
