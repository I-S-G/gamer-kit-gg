import { Group, Input, Label } from "./form-input.styles";

const FormInput = ({label, ...otherProps}) => {
    return(
        <Group>
            <Input {...otherProps} />
            <Label shrink = {otherProps.value.length} > {label}</Label>
        </Group>
    )
}

export default FormInput;