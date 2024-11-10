package household_budget.model;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ExpenseRepository {
    private final ExpenseDbRepository repo;

    public ExpenseRepository(ExpenseDbRepository repo) {
        this.repo = repo;
    }

    public Expense createExpense(Expense expense) {
        return repo.save(expense);
    }

    public List<Expense> findAll() {
        return repo.findAll();
    }

    public boolean deleteExpense(String id) {
        repo.deleteById(id);
        return true;
    }
}
