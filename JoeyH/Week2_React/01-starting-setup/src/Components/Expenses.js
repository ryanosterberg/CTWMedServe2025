import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseDate.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";


function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filterExpenses = props.items.filter(Expenses => {
    return Expenses.date.getFullYear().toString() === filteredYear;
  })

    return (
        <Card className="expenses">
          <ExpensesFilter selected = {filteredYear} onFilterChange = {filterChangeHandler}></ExpensesFilter>
          {filterExpenses.map((expensesElement) => (
            <ExpenseItem
            key = {expensesElement.id}
            title = {expensesElement.title}
            amount = {expensesElement.amount}
            date = {expensesElement.date}
            ></ExpenseItem>
          ))}
        </Card>
    );
}

export default Expenses;