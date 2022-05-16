import styled from 'styled-components';
import { colors } from 'utils';

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AccordionItem = styled.div`
  width: 85%;
  text-align: left;
  background-color: ${colors.darkGreen};
  padding: 20px;
  margin-top: 5px;
  white-space: pre;
  display: flex;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;
