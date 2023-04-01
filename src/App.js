import React from 'react';
import "./App.css";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1", 
      title: "Starlink subscription",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "CPU Build",
      amount: 799.49,
      date: new Date(2021, 2, 12),
     },
    {
      id: "e3",
      title: "FHD Monitor",
      amount: 294.68,
      date: new Date(2021, 3, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  );
}


export default App;