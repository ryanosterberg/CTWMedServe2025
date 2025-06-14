import React, {useState} from "react";
import './newExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const [display, setDisplay] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    function onClickHandler() {
        setDisplay(!display);
    };

    return (
        <div className= 'new-expense'>
            <button onClick={onClickHandler}>
                {display ? 'Cancel' : 'Add New Expense'}
            </button>

            {display && (
               <div><ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm></div>
            )}
           
        </div>
    );
}

export default NewExpense;