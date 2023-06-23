import "./form-input.styles.css";

const FormInput = ({label, ...otherProps}) => {
    return(
        <div className="group">
            <input className="form-input" {...otherProps} />
            <label className= {`label ${otherProps.value? "shrink" : ""}`} >{label}</label>
        </div>
    )
}

export default FormInput;