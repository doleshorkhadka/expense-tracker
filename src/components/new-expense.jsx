import { useForm } from "react-hook-form";

function ExpenseForm({ expenseFormStsFalse }) {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const onCancel = () => {
    reset();
    expenseFormStsFalse();
  };

  const Title = (
    <input defaultValue="title" {...register("title", { required: true })} />
  );
  const Amount = (
    <input defaultValue="title" {...register("amount", { required: true })} />
  );
  const RegisterDate = (
    <input defaultValue="title" {...register("date", { required: true })} />
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-20 flex flex-wrap">
      {Title}
      {Amount}
      {RegisterDate}
      <div>
        <button className=" text-black" onClick={onCancel}>
          Cancel
        </button>
        <button
          className=" bg-purple-950 m-5 sm:p-5 p-2 rounded-lg"
          type="submit"
        >
          Add New Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
