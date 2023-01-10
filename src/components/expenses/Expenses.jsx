import { ExpenseItem } from "../exspense-item/Expenseitem";
import '../expenses/Expenses.css'

export const Exspenses = ({ expenses }) => {
  return (
    <ul className="list-container">
      {expenses.map((elem) => {
        return (
          <ExpenseItem key={elem.title} title={elem.title} price={elem.price+"$"} date={elem.date} />
        );
      })}
    </ul>
  );
};
