import stylesForm from "./Input.module.css";
import stylesTextArea from "./TextArea.module.css"

function TextArea ({ text, name, placeholder, rows})  {

  return (
    <div className={stylesForm.form_control}>
        <label htmlFor={name}>{text}:</label>
        <textarea 
            className={stylesTextArea.textarea}
            name={name} 
            id={name} 
            placeholder={placeholder} 
            rows={rows}
        />
    </div>
  )
}

export default TextArea