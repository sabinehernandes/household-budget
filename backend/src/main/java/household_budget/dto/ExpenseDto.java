package household_budget.dto;

import household_budget.model.Expense;

public record ExpenseDto(String id, String createdAt, String paidBy, String categoryName, String description, int amount) {
    public static ExpenseDto fromEntity(Expense expense) {
        return new ExpenseDto(
                expense.getId(),
                expense.getCreatedAt(),
                expense.getPaidBy(),
                expense.getCategory().getCategoryName(),
                expense.getDescription(),
                expense.getAmount()
        );
    }
}
