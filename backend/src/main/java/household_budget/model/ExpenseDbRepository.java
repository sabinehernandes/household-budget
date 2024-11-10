package household_budget.model;

import org.springframework.data.repository.CrudRepository;

public interface ExpenseDbRepository extends CrudRepository<Expense, String> {
}
