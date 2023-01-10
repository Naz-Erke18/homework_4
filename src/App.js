import { useState } from "react";
import "./App.css";
import { Exspenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";



function App() {
  const [expenses, setExpenses] = useState([
    // {
    //   title: "Туалетная бумага",
    //   price: 300,
    //   date: new Date(),
    // },
    // {
    //   title: "Зарядник",
    //   price: 400,
    //   date: new Date(),
    // },
  ]);
  const addNewExpensehandler = (data) => {
   setExpenses(prevState =>[...prevState,data]);
  };
  return (
    <div className="app">
      <NewExpense onNewExpenseAdd={addNewExpensehandler} />
      <Exspenses expenses={expenses} />
    </div>
  );
}

export default App;
