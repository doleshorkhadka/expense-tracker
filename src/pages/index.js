export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-gray-700">
      <div className="z-10 max-w-5xl w-full">
        <section className="  z-10 max-w-5xl w-full font-mono text-sm flex items-center justify-center bg-violet-400 rounded-lg mb-5">
          <button className=" bg-purple-900 m-5 sm:p-5 p-2 rounded-lg">
            Add New Expense
          </button>
        </section>
        <section className="mt-5 gap-3 flex bg-gray-900 rounded-lg">
          <div className="flex justify-between w-full">
            <p>Filter by year</p>
            <button>2020</button>
          </div>
          <div></div>
          <div className="h-250"></div>
        </section>
      </div>
    </main>
  );
}
