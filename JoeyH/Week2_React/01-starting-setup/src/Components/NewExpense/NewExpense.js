import React from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense() {

    return (
        <div className= 'new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    );
}

export default NewExpense;