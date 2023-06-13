import React from "react";
import './style.scss';

function Expenses(props) {
  const data = props.data;

  return (data.map((a) => {
    const date = a.date instanceof Date ? a.date.toLocaleDateString() : "";
    return (
    <div key={a.id} className="expense">
        <div className="expense-date">{date}</div>
        <div className="expense-item">{a.title}</div>
        <div className="expense-amount">${a.amount}</div>
    </div>);
  }));
}

export default Expenses