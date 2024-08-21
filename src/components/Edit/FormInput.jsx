import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { InputFieldBase } from "../../styles/globalStyle";

const FormInputLayout = styled.div`
  width: 100%;
  display: flex;
`;

const FormInputBox = styled.input`
  width: 100%;
  display: flex;
  border: 0;
  outline: none;
`;

const FormInput = ({ placeholder, value, handleChange, readOnly, type }) => {
  const [focused, setFocused] = useState(false);

  return (
    <FormInputLayout>
      <InputFieldBase
        $focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <FormInputBox
          readOnly={readOnly}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.currentTarget.value)}
          type={type}
        />
      </InputFieldBase>
    </FormInputLayout>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
};

export { FormInput };
