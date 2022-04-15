import { StyledInput } from "./Input.styled";

interface Props {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, onChange }: Props) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};

export default Input;
