import React from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }
    return (
        <div className= 'new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;