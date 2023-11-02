import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { LoginUser } from "@/utils/auth";

const AuthForm = ({ isLoginForm = false, modalStatus, signupStatus }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    LoginUser(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className=" text-left">
      {/* register your input into the hook by invoking the "register" function */}

      <FormInput
        type="email"
        placeholder="Email address"
        register={register}
        registerName="email"
        required={true}
        errors={errors}
      />
      {errors.email && <span className="pl-2 text-red-500">required</span>}

      {signupStatus && (
        <>
          <FormInput
            type="email"
            placeholder="Re-enter email"
            register={register}
            registerName="reEmail"
            required={true}
          />
          {errors.email && <span className="pl-2 text-red-500">required</span>}
        </>
      )}

      <FormInput
        type="password"
        placeholder="Account password"
        register={register}
        registerName="password"
        required={true}
        errors={errors}
      />
      {errors.password && <span className="pl-2 text-red-700">required</span>}

      {signupStatus && (
        <>
          <FormInput
            type="password"
            placeholder="Re-enter password"
            register={register}
            registerName="rePassword"
            required={true}
            errors={errors}
          />
          {errors.password && (
            <span className="pl-2 text-red-700">required</span>
          )}
        </>
      )}

      <div className="mt-6 flex items-center">
        <button
          type="submit"
          className=" bg-red-700 text-white p-2 px-4 rounded-md mx-auto "
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
