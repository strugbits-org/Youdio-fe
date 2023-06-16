import { ErrorMessage, useField } from "formik";
import styled from "styled-components";
import { Error, Label } from "src/components/AdminInput/AdminInpComp";
import { StyleInput, DropInput } from "./AdminInpComp";
import { fonts } from "src/helpers";
const { poppinsRegular } = fonts;

const Ipt = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const CONTAINER = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    right: 10px;
    /* min-width: 10px; */
  }
`;
const TEXTAREA = styled.textarea`
  width: 720px;
  height: 185px;
  color: #797979;
  background: #f7f7f7;
  outline: none;
  font-size: 0.8em;
  padding-inline:5px;
  padding-block: 5px;
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
export const FieldInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Ipt>
      <Label htmlFor={props.id}>{label}</Label>
      <StyleInput err={meta.touched && meta.error} {...field} {...props} />
      <ErrorMessage component={Error} name={field.name} className="error" />
    </Ipt>
  );
};
export const DropDownInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const selectedOption = field.value;

  return (
    <>
      <Ipt>
        <Label htmlFor={props.id}>{label}</Label>

        <CONTAINER className="input-container">
          <DropInput err={meta.touched && meta.error} {...field} {...props} highlightOption={selectedOption}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </DropInput>
        </CONTAINER>
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
export const TextFieldInput = ({ ...props }) => {
  return (
    <Ipt>
      <StyleInput {...props} />
    </Ipt>
  );
};
