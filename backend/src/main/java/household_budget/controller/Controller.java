package household_budget.controller;

import household_budget.dto.ExpenseDto;
import household_budget.model.Expense;
import household_budget.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {
    private final ExpenseService service;

    public Controller(ExpenseService service) {
        this.service = service;
    }

    @GetMapping("/api/expenses/")
    public ResponseEntity<List<ExpenseDto>> getAllExpenses() {
        List<ExpenseDto> expenses = service.getAllExpenses();
        return ResponseEntity.ok(expenses);
    }

    @PostMapping("/api/expenses/")
    public ResponseEntity<Expense> createExpense(@Valid @RequestBody ExpenseDto dto) {
        Expense expense = service.createExpense(dto);
        return new ResponseEntity<>(expense, HttpStatus.CREATED);
    }

    @DeleteMapping("/api/expenses/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable String id) throws Exception {
        service.deleteExpense(id);
        return ResponseEntity.noContent().build();
    }
}
