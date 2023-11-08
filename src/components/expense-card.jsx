const ExpenseCard = ({ data }) => {
  const date = new Date(data.date);
  return (
    <div className=" flex items-center justify-between bg-gray-600 rounded-md m-3">
      <div className="flex items-center">
        <div className=" aspect-square w-20 bg-[#181818] font-bold m-2 text-center p-2 border-white border rounded-xl">
          <p className=" text-xs">
            {date.toLocaleString("default", { month: "long" })}
          </p>
          <p className=" text-xs">{date.getFullYear()}</p>
          <p className=" text-xl">{date.getDay()}</p>
        </div>
        <p className="text-2xl font-bold overflow-clip">{data.title}</p>
      </div>
      <p className=" bg-purple-950 px-3 py-2 rounded-md m-2 border font-bold">{`$ ${data.amount}`}</p>
    </div>
  );
};

export default ExpenseCard;
