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

    {props.items.map(expense => (
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
    />
    ))}

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
       />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
       /> 
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
       />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
       />
        <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
       />
    </Card>
    </div>
    )
}




export default Expenses;