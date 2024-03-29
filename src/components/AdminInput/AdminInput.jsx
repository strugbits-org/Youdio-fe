import { ErrorMessage, useField } from "formik";
import styled from "styled-components";
import {
  Error,
  Label,
  StyleInputIcon,
} from "src/components/AdminInput/AdminInpComp";
import { StyleInput, DropInput } from "./AdminInpComp";
import { fonts } from "src/helpers";
import { useTranslation } from "react-i18next";
const { poppinsRegular } = fonts;

const Ipt = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
`;

const TEXTAREA = styled.textarea`
  width: 100%;
  height: 185px;
  color: #797979;
  background: #f7f7f7;
  outline: none;
  resize: none;
  font-size: 0.8em;
  padding-inline: 16px;
  padding-block: 16px;
  font-family: ${poppinsRegular};
  border: ${(props) =>
    props.err ? "1px solid red" : "1px solid var(--textParaBlack25)"};

  &:hover {
    border-color: ${(props) => (props.err ? "red" : "var(--backgroundGreen)")};
  }

  &:focus {
    border-color: ${(props) => (props.err ? "red" : "var(--backgroundGreen)")};
    border-width: 2px;
  }

  &::placeholder {
    color: #797979;
  }
`;
export const FieldInputIcon = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Ipt>
      <Label htmlFor={props.id}>{label}</Label>
      <StyleInputIcon err={meta.touched && meta.error} {...field} {...props} />
      <ErrorMessage component={Error} name={field.name} className="error" />
    </Ipt>
  );
};
export const FieldInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { t } = useTranslation();
  return (
    <Ipt>
      <Label htmlFor={props.id}>{label}</Label>
      <StyleInput err={meta.touched && meta.error} {...field} {...props} />
      {/* <ErrorMessage component={Error} name={field.name} className="error" /> */}
      {meta.touched && meta.error && <Error>{t(meta.error)}</Error>}
    </Ipt>
  );
};

export const DropDownInput = ({
  label,
  options,
  placeholderName,
  ...props
}) => {
  const [field, meta] = useField(props);
  // const selectedOption = field.value;

  return (
    <>
      <Ipt>
        <Label htmlFor={props.id}>{label}</Label>

        {/* <CONTAINER className="input-container"> */}
        <DropInput err={meta.touched && meta.error} {...field} {...props}>
          <option key="disbaled" disabled value="">
            {placeholderName ? placeholderName : "Select"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </DropInput>
        {/* </CONTAINER> */}
        <ErrorMessage component={Error} name={field.name} className="error" />
      </Ipt>
    </>
  );
};

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Ipt>
        <Label htmlFor={props.id}>{label}</Label>
        <TEXTAREA err={meta.touched && meta.error} {...field} {...props} />
        {/* <StyleInput err={meta.touched && meta.error} {...field} {...props} /> */}

        <ErrorMessage component={Error} name={field.name} className="error" />
      </Ipt>
    </>
  );
};

export const UploadButton = ({ label, ...props }) => {
  return (
    <>
      {/* <BOX4>

        <input
          id="userImage"
          name="userImage"
          type="file"
          className="userImage"
          accept="image/*"
          onChange={(e) =>
            formikRef.current.setFieldValue("userImage", e.target.files[0])
          }
        />

      </BOX4> */}
    </>
  );
};
export const TextFieldInput = ({ ...props }) => {
  return (
    <Ipt>
      <StyleInput {...props} />
    </Ipt>
  );
};
