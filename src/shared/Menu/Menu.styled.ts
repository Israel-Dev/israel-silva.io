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
  position: absolute;
  top: 30%;
  right: 50px;

  .mobile-menu-icon {
    top: 0;
    z-index: 150;
    position: absolute;
  }

  .mobile-menu-icon:hover {
    cursor: pointer;
  }

  @media (min-width: ${mobileMinWidth}) {
    display: none;
  }
`;

export const MobileMenuBackground = styled.div`
  position: absolute;
  opacity: 0;
  height: 0vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: ${colors.black};
  transition: all ease-in-out 1s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
