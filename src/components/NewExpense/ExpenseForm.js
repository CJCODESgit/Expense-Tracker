import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
return (
<form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' placeholder="what did you spend on this time, huh?" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" placeholder="not your life savings mate"/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2050-12-31"/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
</form>
)
}

export default ExpenseForm;