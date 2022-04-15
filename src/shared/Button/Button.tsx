import { MouseEventHandler } from 'react';
import { StyledButton } from './Button.styled';

interface Props {
  label: string;
  callback: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ label, callback }: Props) => {
  return (
    <StyledButton className="button-wrapper" onClick={callback}>
      {label}
    </StyledButton>
  );
};
