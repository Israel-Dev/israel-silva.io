import { StyledTextArea } from './TextArea.styled';

interface Props {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({ placeholder, onChange }: Props) => {
  return <StyledTextArea placeholder={placeholder} onChange={onChange} />;
};

export default TextArea;
