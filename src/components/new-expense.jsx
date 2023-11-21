import { addExpense, editExpense } from "@/utils/crud";
import { useForm } from "react-hook-form";

const ExpenseForm = ({
  expenseFormStsFalse,
  data = { id: "", title: "", amount: "", date: "" },
  isEditMode = false,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (formData) => {
    try {
      isEditMode ? addExpense(formData) : editExpense(data.id, formData);
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
      <div className="w-2/5 h-10 flex flex-col text-lg">
        <label className=" font-bold ">{label}</label>
        <input
          defaultValue={defaultValue}
          className={`rounded-md ${type === "date" ? "py-6 px-2" : "p-2"} `}
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
        {InputField("Title", "title", "name", data.title)}
        {InputField("Amount", "amount", "number", data.amount)}
        {InputField("Date", "date", "date", data.date)}
      </div>

      <div className="w-full text-right text-lg">
        <button className=" text-black  " onClick={onCancel}>
          Cancel
        </button>
        <button
          className=" bg-purple-950 m-5 sm:p-5 p-2 text-white rounded-lg"
          type="submit"
        >
          {isEditMode ? "Add New Expense" : "Update Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
