import { addExpense } from "@/utils/crud";
import { useForm } from "react-hook-form";

function ExpenseForm({ expenseFormStsFalse }) {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      addExpense(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  const onCancel = () => {
    reset();
    expenseFormStsFalse();
  };

  const InputField = (label, registerName, type, defaultValue) => {
    return (
      <div className="w-2/5 h-10 flex flex-col">
        <label className=" font-bold text-lg">{label}</label>
        <input
          className=" rounded-md p-2"
          type={type}
          {...register(registerName, { required: true })}
        />
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 flex flex-wrap gap-2 text-black"
    >
      <div className="w-full flex flex-wrap gap-7">
        {InputField("Title", "title", "name")}
        {InputField("Amount", "amount", "number")}
        {InputField("Date", "date", "date")}
      </div>

      <div className="w-full text-right">
        <button className=" text-black " onClick={onCancel}>
          Cancel
        </button>
        <button
          className=" bg-purple-950 m-5 sm:p-5 p-2 text-white rounded-lg"
          type="submit"
        >
          Add New Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
