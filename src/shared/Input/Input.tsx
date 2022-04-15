import { StyledInput } from "./Input.styled";

interface Props {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, onChange, type }: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      type={type ? type : "text"}
    />
  );
};

export default Input;
