import styled from "styled-components";
import PropTypes from "prop-types";

const FormRadioLayout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FormRadioItemBox = styled.div`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
`;

const FormRadioItemButton = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.brand600 : theme.colors.gray300};
  border-radius: 0.625rem;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.brand50 : theme.colors.white};
`;

const FormRadioItemText = styled.span`
  ${({ theme }) => theme.texts.textMD};
  font-weight: ${({ theme }) => theme.weights.medium};
  color: ${({ theme }) => theme.colors.gray700};
`;

const CheckIcon = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 0.625rem;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.brand600 : theme.colors.white};
`;

const FormRadio = ({ menus, selectedMenu, handleChange }) => {
  return (
    <FormRadioLayout>
      {menus.map((menuItem, menuIndex) => {
        return (
          <FormRadioItemBox
            key={menuIndex}
            $selected={selectedMenu == menuIndex}
            onClick={() => handleChange(menuIndex)}
          >
            <FormRadioItemButton $selected={selectedMenu == menuIndex}>
              <CheckIcon $selected={selectedMenu == menuIndex} />
            </FormRadioItemButton>
            <FormRadioItemText>{menuItem.title}</FormRadioItemText>
          </FormRadioItemBox>
        );
      })}
    </FormRadioLayout>
  );
};

FormRadio.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedMenu: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

export { FormRadio };
