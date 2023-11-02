import { useForm } from "react-hook-form";

function ExpenseForm({ formCancel }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const Title = (
    <input defaultValue="title" {...register("title", { required: true })} />
  );
  const Amount = (
    <input defaultValue="title" {...register("amount", { required: true })} />
  );
  const Date = (
    <input defaultValue="title" {...register("date", { required: true })} />
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-20">
      {Title}
      {Amount}
      {Date}
      <button className=" text-black" onClick={formCancel}>
        Cancel
      </button>
      <button
        className=" bg-purple-950 m-5 sm:p-5 p-2 rounded-lg"
        type="submit"
      >
        Add New Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
