package household_budget.controller;

import household_budget.dto.ExpenseDto;
import household_budget.model.Expense;
import household_budget.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    private final ExpenseService service;

    public Controller(ExpenseService service) {
        this.service = service;
    }

    @PostMapping("/api/expenses/")
    public ResponseEntity<Expense> createExpense(@Valid @RequestBody ExpenseDto dto) {
        Expense expense = service.createExpense(dto);
        return new ResponseEntity<>(expense, HttpStatus.CREATED);
    }
}
