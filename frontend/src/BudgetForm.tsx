export default function BudgetForm() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Household Budget</h1>
      <form>
        <label htmlFor="date">Date</label>
        <input type="date" />
        <div>
          <label htmlFor="person">Paid by</label>
          <div>
            <input type="radio" name="person" id="sabine" />
            <label htmlFor="sabine">Sabine</label>
          </div>
        </div>
        <div>
          <input type="radio" name="person" id="sabine" />
          <label htmlFor="beatriz">Beatriz</label>
        </div>
        <div>
          <p>Category</p>
          <select name="category" id="category">
            <option value="select">--select an option--</option>
            <option value="housing">Housing</option>
            <option value="groceries">Groceries</option>
            <option value="restaurant">Restaurant</option>
            <option value="clothing">Clothing</option>
            <option value="healthcare">Healthcare</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="transport">Transport</option>
          </select>
        </div>
        <div>
          <p>Amount (SEK)</p>
          <input type="number" name="amount" id="amount" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
