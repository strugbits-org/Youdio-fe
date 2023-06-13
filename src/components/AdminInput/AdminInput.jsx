import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';
import { Error, Label } from 'src/components/AdminInput/AdminInpComp';
import { StyleInput } from './AdminInpComp';

const Ipt = styled.div`
    /* width: 100%; */
    display:flex;
    flex-direction:column;
    gap:4px;
    
`

export const FieldInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Ipt>
            <Label htmlFor={props.id}>{label}</Label>
            <StyleInput
                err={meta.touched && meta.error}
                {...field}
                {...props}
            />
            <ErrorMessage component={Error} name={field.name} className="error" />
        </Ipt>
    )
}

export const TextFieldInput = ({ ...props }) => {

    return (
        <Ipt>
            <StyleInput
                {...props}
            />
        </Ipt>
    )
}
