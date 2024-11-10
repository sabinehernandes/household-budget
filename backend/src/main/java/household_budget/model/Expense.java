package household_budget.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "expenses_id")
    private String id;

    private String createdAt;

    private String paidBy;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    private String description;

    private int amount;

    public Expense(String id, String createdAt, String paidBy, Category category, String description, int amount) {
        this.id = id;
        this.createdAt = createdAt;
        this.paidBy = paidBy;
        this.category = category;
        this.description = description;
        this.amount = amount;
    }

    public Expense() {
    }

    public void addExpense(String createdAt, String paidBy, Category category, String description, int amount) {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getPaidBy() {
        return paidBy;
    }

    public void setPaidBy(String paidBy) {
        this.paidBy = paidBy;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Expense expense)) return false;
        return amount == expense.amount && Objects.equals(id, expense.id) && Objects.equals(createdAt, expense.createdAt) && Objects.equals(paidBy, expense.paidBy) && Objects.equals(category, expense.category) && Objects.equals(description, expense.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, createdAt, paidBy, category, description, amount);
    }
}
