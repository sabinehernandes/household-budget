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
@RequestMapping("${api.base-path}${api.controllers.expenses}")
public class Controller {
    private final ExpenseService service;

    public Controller(ExpenseService service) {
        this.service = service;
    }

    @GetMapping()
    public ResponseEntity<List<ExpenseDto>> getAllExpenses() {
        List<ExpenseDto> expenses = service.getAllExpenses();
        return ResponseEntity.ok(expenses);
    }

    @PostMapping()
    public ResponseEntity<Expense> createExpense(@Valid @RequestBody ExpenseDto dto) {
        Expense expense = service.createExpense(dto);
        return new ResponseEntity<>(expense, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable String id) throws Exception {
        service.deleteExpense(id);
        return ResponseEntity.noContent().build();
    }
}
