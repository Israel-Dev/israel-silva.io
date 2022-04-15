import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const ListWrapper = styled.section``;

export const ListUL = styled.ul`
  padding-left: 0;
  list-style-type: none;
  columns: 2;
  float: right;
  width: 75%;
`;

export const ListLI = styled.li`
  margin-bottom: 25px;
`;

export const ListLISpan = styled.span`
  color: ${colors.green};
`;
