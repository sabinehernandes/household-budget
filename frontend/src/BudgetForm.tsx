export default function BudgetForm() {
  return (
    <>
      <section className="budget-form bg-slate-100 m-10 p-10 rounded-md leading-relaxed">
        <h1 className="text-5xl text-gray-700 font-bold tracking-wide text-center">
          Household Budget
        </h1>
        <form className="text-gray-700 text-xl my-8">
          <fieldset className="my-4">
            <label htmlFor="date" className="font-medium">
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm"
              />{" "}
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <label htmlFor="person" className="font-medium">
              Paid by
            </label>
            <div className="mt-2">
              <input type="radio" name="person" id="sabine" />
              <label htmlFor="sabine" className="ml-3">
                Sabine
              </label>
            </div>
            <div>
              <input type="radio" name="person" id="sabine" />
              <label htmlFor="beatriz" className="ml-3">
                Beatriz
              </label>
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <p className="font-medium">Category</p>
            <select
              name="category"
              id="category"
              className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm mt-2"
            >
              <option value="select">--select an option--</option>
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="restaurant">Restaurant</option>
              <option value="clothing">Clothing</option>
              <option value="healthcare">Healthcare</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="transport">Transport</option>
            </select>
          </fieldset>
          <fieldset className="mb-9">
            <p className="font-medium">Amount (SEK)</p>
            <input
              type="number"
              name="amount"
              id="amount"
              className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm mt-2"
            />
          </fieldset>
          <button
            type="submit"
            className="rounded-md bg-white px-2.5 py-1.5 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-150"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
