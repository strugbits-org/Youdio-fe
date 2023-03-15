import { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

import { Input, Error, Label } from 'src/components';
import { icons } from 'src/helpers';

const Ipt = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    gap:4px;
    /* position: relative; */
    
`

const IptWithIcon = styled.div`
    position:relative;
    & .eye{
        position: absolute;
        top: 50%;
        transform:translateY(-50%);
        right: 16px;
        cursor:pointer;
    }
`

export const FieldInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Ipt>

            {/* {src && <img src={src} alt="" width="15px" height="15px" />} */}
            <Label htmlFor={props.id}>{label}</Label>
            <Input
                err={meta.touched && meta.error}
                // isIcon={src}
                {...field}
                {...props}
            />
            <ErrorMessage component={Error} name={field.name} className="error" />
        </Ipt>
    )
}

export const FieldPassword = ({ src, label, ...props }) => {
    const [field, meta] = useField(props);
    const [visible, setVisible] = useState(false)

    return (
        <Ipt>

            {/* {src && <img src={src} alt="" width="15px" height="15px" />} */}
            <Label htmlFor={props.id}>{label}</Label>
            <IptWithIcon>
                <Input
                    err={meta.touched && meta.error}
                    // isIcon={src}
                    {...field}
                    {...props}
                    type={visible ? "text" : "password"}
                />
                <img
                    className='eye'
                    src={visible ? icons.openEye : icons.closeEye}
                    alt='close_eye' width="" height=""
                    onClick={() => setVisible(!visible)} />
            </IptWithIcon>
            <ErrorMessage component={Error} name={field.name} className="error" />
        </Ipt>
    )
}

export const TextFieldInput = ({ ...props }) => {

    return (
        <Ipt>
            <Input
                {...props}
            />
        </Ipt>
    )
}
