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
  caret-color: ${({ $hideCursor }) => ($hideCursor ? "transparent" : "auto")};
`;

const FormInput = ({
  placeholder,
  value,
  handleChange,
  handleBlur = () => {},
  readOnly,
  type,
  hideCursor = false,
  disabled = false,
}) => {
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
          onBlur={(e) => handleBlur(e.currentTarget.value)}
          type={type}
          $hideCursor={hideCursor}
          disabled={disabled}
        />
      </InputFieldBase>
    </FormInputLayout>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  hideCursor: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { FormInput };
