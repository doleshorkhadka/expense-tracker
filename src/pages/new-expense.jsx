import { useForm } from "react-hook-form";

function NewExpense(props) {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {Title}
      {Amount}
      {Date}
      <input value="Add Expense" type="submit" />
    </form>
  );
}

export default NewExpense;
