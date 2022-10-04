import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.addExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm SaveExpenseData ={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;