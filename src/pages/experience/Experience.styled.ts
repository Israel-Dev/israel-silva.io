import styled from 'styled-components';
import { mobileMinWidth } from 'utils';

export const ExperienceMain = styled.main`
  width: 80%;

  @media (max-width: ${mobileMinWidth}) {
    width: auto;
  }
`;

export const DesktopView = styled.div`
  display: none;

  @media (min-width: ${mobileMinWidth}) {
    display: block;
  }
`;

export const MobileView = styled.div`
  display: none;

  @media (max-width: ${mobileMinWidth}) {
    display: block;
    width: 100%;
  }
`;

export const ExperienceSection = styled.section`
  width: 100%;
  height: 40vh;
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.article``;
