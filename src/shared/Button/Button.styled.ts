import styled from 'styled-components';
import { colors } from '../../utils';

export const StyledButton = styled.button`
  border: none;
  background-color: ${colors.darkGreen};
  color: white;
  font-size: 14px;
  padding: 15px;
  border-radius: 7px;
  transition: all ease-in-out 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all ease-in-out 0.3s;
  }
`;
