import styled from 'styled-components';
import { colors } from 'utils';

export const AccordionHeader = styled.div`
  border-radius: 10px;
  width: 100%;
  text-align: left;
  background-color: ${colors.darkGreen};
  padding: 20px 0;
  margin-top: 5px;
  white-space: pre;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  div {
    margin-left: 20px;
  }

  aside {
    margin-right: 20px;
  }
`;

export const AccordionContent = styled.section`
  width: 99%;
  background-color: black;
  border: solid 1px white;
  margin-top: -10px;
  z-index: -10;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
`;

export const AccordionContentSpacing = styled.div`
  padding: 20px 0 5px 20px;
`;
