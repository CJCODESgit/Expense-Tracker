import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
  }

 const filteredExpenses = props.items.filter(expense =>
  filteredYear === "all"
    ? true // include all expenses
    : expense.date.getFullYear().toString() === filteredYear // filter by year
);


    return (
      <div>
    <Card className='expenses'> <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    
    {filteredExpenses.length === 0 && <p>No expenses found</p>}

    {filteredExpenses.length > 0 &&filteredExpenses.map((expense) => (
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
    />
    )) }

    

      
    </Card>
    </div>
    )
}




export default Expenses;