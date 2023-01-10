import "./FormInput.css"

const FormInput = ({id,LabelName,inputType,placeholder,...rest}) => {
  return (
    <div className="container">
      <label htmlFor={id}>{LabelName}</label>
      <input className="input"
        placeholder={placeholder || "..."}
        id={id}
        type={inputType} {...rest}
      />
    </div>
  );
};

export default FormInput;