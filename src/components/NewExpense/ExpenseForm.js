import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
// commented code is me using one state to listen to user input, but decided to use multiple state instead. can be changed anytime depending on project.

// using multiple states....

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

 //or
    
 // using one state instead
//    const [userInput, setUserInput] = useState({
//         enteredTitle: '',
//         enteredAmount: '',
//         enteredDate: ''
//     });



    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   })
    };

    const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //   })
    };

     const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    //     setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    //   })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

return (
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} placeholder="what did you spend on this time, huh?" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler} placeholder="not your life savings mate"/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2050-12-31"  value={enteredDate} onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
    </div>
</form>
)
}

export default ExpenseForm;