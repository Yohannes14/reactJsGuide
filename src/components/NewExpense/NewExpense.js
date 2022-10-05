import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] =useState(false);

  const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.addExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler=() =>{
    setIsEditing(true);
  };
  const stopEditingHandler=() =>{
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing &&(<button type="submit"
        onClick={startEditingHandler}>Add New Expense</button>
)}
      {isEditing && (<ExpenseForm 
           saveExpenseData ={saveExpenseDataHandler}
           onCancel ={stopEditingHandler} />
)}
    </div>
  );
};

export default NewExpense;