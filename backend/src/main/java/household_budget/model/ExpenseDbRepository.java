package household_budget.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseDbRepository extends JpaRepository<Expense, String> {
}
