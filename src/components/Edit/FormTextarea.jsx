import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { InputFieldBase } from "../../styles/globalStyle";

const FormTextareaLayout = styled.div`
  width: 100%;
  display: flex;
`;

const FormTextareaBox = styled.textarea`
  width: 100%;
  display: flex;
  border: 0;
  outline: none;
  caret-color: ${({ $hideCursor }) => ($hideCursor ? "transparent" : "auto")};
  resize: vertical;
`;

const FormTextarea = ({
  placeholder,
  value,
  handleChange,
  handleBlur = () => {},
  readOnly,
  hideCursor = false,
  disabled = false,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <FormTextareaLayout>
      <InputFieldBase
        $focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <FormTextareaBox
          readOnly={readOnly}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.currentTarget.value)}
          onBlur={(e) => handleBlur(e.currentTarget.value)}
          $hideCursor={hideCursor}
          disabled={disabled}
          rows='6'
        />
      </InputFieldBase>
    </FormTextareaLayout>
  );
};

FormTextarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  hideCursor: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { FormTextarea };
