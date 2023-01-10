import { useState } from "react";
import Button from "../UI/Button/Button";
import FormInput from "../UI/Forminput/FormInput";
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [date, setDate] = useState(null);

  const cancelHanler = (event) => {
    event.preventDafault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(event.target.value);
    }
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      date,
      price,
    };
    props.onNewExpenseAdd(expenseData);
    setTitle("");
    setPrice("")
  };


  

  return (
    <div>
      <form className="form">
        <div className="inputs-container">
          <FormInput
          id="name"
          LabelName="Название"
          inputType="text"
          placeholder="Введите ..."
          value={title}
          onChange={titleInputChangeHandler}
        />

        <FormInput
          id="price"
          LabelName="Стоимость:"
          inputType="number"
          placeholder='0'
          value={price}
          onChange={priceInputChangeHandler}
        />

        <FormInput
          id="date"
          LabelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          onChange={dateInputChangeHandler}
        />
        </div>
        
        <div className="btns-wrapper">
          <Button
          style={{ marginLeft: 600 }}
          title="Отмена"
          onClick={cancelHanler}
        />
        <Button title="Сохранить" onClick={saveHandler} />
        </div>
        
      </form>
    </div>
  );
};
