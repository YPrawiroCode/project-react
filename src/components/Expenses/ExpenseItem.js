import React from "react";

import ExpensesDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React!");

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
