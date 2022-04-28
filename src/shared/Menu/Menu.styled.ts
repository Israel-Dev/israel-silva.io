import styled from 'styled-components';
import { mobileMinWidth } from 'utils';
import { colors } from '../../utils/colors';

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${mobileMinWidth}) {
    display: none;
  }
`;

export const PagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PageTitle = styled.p`
  cursor: pointer;
  font-size: 1.2em;
  margin-right: 25px;
`;

export const PageIndex = styled.span`
  color: ${colors.green};
`;

export const MobileMenuNav = styled.nav`
  display: block;

  @media (min-width: ${mobileMinWidth}) {
    display: none;
  }
`;
