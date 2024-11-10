package household_budget.service;

import household_budget.dto.ExpenseDto;
import household_budget.model.Category;
import household_budget.model.CategoryRepository;
import household_budget.model.Expense;
import household_budget.model.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepo;
    private final CategoryRepository categoryRepo;

    public ExpenseService(ExpenseRepository expenseRepo, CategoryRepository categoryRepo) {
        this.expenseRepo = expenseRepo;
        this.categoryRepo = categoryRepo;
    }

    public Expense createExpense(ExpenseDto dto) {
        Category category = categoryRepo.findByCategoryName(dto.categoryName())
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        Expense expense = new Expense();
        expense.setCreatedAt(dto.createdAt());
        expense.setPaidBy(dto.paidBy());
        expense.setCategory(category);
        expense.setDescription(dto.description());
        expense.setAmount(dto.amount());

        return expenseRepo.createExpense(expense);
    }

    public List<ExpenseDto> getAllExpenses() {
        return expenseRepo.findAll().stream().map(ExpenseDto::fromEntity).toList();
    }

    public void deleteExpense(String id) throws Exception {
        if (!expenseRepo.deleteExpense(id)) {
            throw new Exception("Expense not found");
        }
    }

}
