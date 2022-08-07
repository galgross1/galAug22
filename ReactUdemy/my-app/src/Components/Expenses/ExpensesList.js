import React from "react";
import ExpenseItem from "./ExpenseItem";
import  "./ExpensesList.css"

const ExpensesList = props =>{
    if(props.items.length === 0){
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    };

    return <ul className="expenses-list">
      {
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
};

export default ExpensesList;

  // {/* BASIC WAY TO WRITE {expensesContent} */}
  //     {/* {filteredExpenses.length === 0 && (<p>No Expenses Found.</p>)};

  //     {filteredExpenses.length > 0 && 
  //       filteredExpenses.map((expense) => (
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         />
  //       ))   
  //     } */}