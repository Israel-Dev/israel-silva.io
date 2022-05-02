import styled from 'styled-components';
import { mobileMinWidth } from 'utils';
import { colors } from 'utils/colors';

export const ListWrapper = styled.section``;

export const ListUL = styled.ul`
  padding-left: 0;
  list-style-type: none;
  columns: 2;
  float: right;
  width: 75%;

  @media (max-width: ${mobileMinWidth}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const ListLI = styled.li`
  margin-bottom: 25px;

  @media (max-width: ${mobileMinWidth}) {
    min-width: 75px;
  }
`;

export const ListLISpan = styled.span`
  color: ${colors.green};
`;
