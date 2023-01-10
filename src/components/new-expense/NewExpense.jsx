import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";
import "./showExpenseForm.css";

export const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setshowForm, setState] = useState(false);

  const showExpenseForm = () => {
    setshowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="box">
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />
      )}
    </div>
  );
};
