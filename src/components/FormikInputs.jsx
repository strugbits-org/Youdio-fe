import { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

import { Input, Error, Label } from 'src/components';
import { icons } from 'src/helpers';
import { useTranslation } from 'react-i18next';

const Ipt = styled.div`
    /* width: 100%; */
    display:flex;
    flex-direction:column;
    gap:4px;
    
`

const IptWithIcon = styled.div`
    position:relative;
    & .eye{
        width: 22px;
        position: absolute;
        top: 50%;
        transform:translateY(-50%);
        right: 16px;
        cursor:pointer;
    }
`

export const FieldInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { t} = useTranslation()
    return (
      <Ipt>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <Input err={meta.touched && meta.error} {...field} {...props} />
        {/* <ErrorMessage component={Error} name={field.name} className="error" /> */}
        {meta.touched && meta.error && <Error>{t(meta.error)}</Error>}
      </Ipt>
    );
}

export const FieldPassword = ({ src, label, ...props }) => {
    const [field, meta] = useField(props);
    const [visible, setVisible] = useState(false)
    const { t } = useTranslation();

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
            className="eye"
            src={visible ? icons.openEye : icons.closeEye}
            alt="close_eye"
            width=""
            height=""
            onClick={() => setVisible(!visible)}
          />
        </IptWithIcon>
        {/* <ErrorMessage component={Error} name={field.name} className="error" /> */}
        {meta.touched && meta.error && <Error>{t(meta.error)}</Error>}
      </Ipt>
    );
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
