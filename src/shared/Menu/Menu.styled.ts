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

  .mobile-menu-icon {
    z-index: 1000;
  }

  .mobile-menu-icon:hover {
    cursor: pointer;
  }

  .visible {
    z-index: 100;
    opacity: 1;
    transition: all ease-in-out 1s;
    width: 100vw;
    height: 100vh;
    left: 0;
  }

  @media (min-width: ${mobileMinWidth}) {
    display: none;
  }
`;

export const MobileMenuBackground = styled.div`
  opacity: 0;
  position: absolute;
  background-color: ${colors.black};
  transition: all ease-in-out 1s;
  text-align: center;
`;
