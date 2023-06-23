import "./button.styles.css";

const Button = ({label, custom = "", buttonType, ...otherProps}) => {

    return(
        <button className= {`button ${buttonType? buttonType: ""} ${custom}`} {...otherProps}>{label}</button>
    )
}

export default Button;