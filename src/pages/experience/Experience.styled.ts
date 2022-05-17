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
    position: relative;
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

export const AccordionContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AccordionContent = styled.div`
  text-align: center;
`;

export const StyledImage = styled.img`
  height: 15vh;
  min-height: 100px;
  width: 70%;
  object-fit: cover;
`;

export const StyledParagraph = styled.p`
  text-align: left;
`;
