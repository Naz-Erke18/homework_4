import "./ExpenseItem.css"

export const ExpenseItem = (props) => {
  const { date, title, price } = props;
  return (
    <div className="card">
      <div className="text">
        <div className="title">
          <p className="date">{date.toString()}</p>
          <p className="value">{title}</p>
          <p className="sum">{price}</p>
        </div>
      </div>
    </div>
  );
};
