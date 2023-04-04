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

    return (
      <div>
    <Card className='expenses'> <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

    {props.items.map((expense) => (
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
    />
    ))}

      
    </Card>
    </div>
    )
}




export default Expenses;