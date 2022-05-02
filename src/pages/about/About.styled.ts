import styled from 'styled-components';
import { mobileMinWidth } from 'utils';

export const AboutMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${mobileMinWidth}) {
    margin-top: -175px !important;
    justify-content: center;
  }
`;

export const AboutSection = styled.section`
  height: 70vh;
  position: relative;

  @media (max-width: ${mobileMinWidth}) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export const DesktopRightSection = styled.section`
  width: 40vw;

  @media (max-width: ${mobileMinWidth}) {
    display: none;
  }
`;

export const ColumnRightHeader = styled.header``;

export const ColumnRightArticle = styled.article``;

export const TextBlockWrapper = styled.article`
  margin-bottom: 50px;

  @media (min-width: ${mobileMinWidth}) {
    width: 40vw;
  }
`;

export const ImageWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${mobileMinWidth}) {
    width: 40vw;
  }
`;

export const MobileSection = styled.section`
  display: none;

  @media (max-width: ${mobileMinWidth}) {
    display: block;
    margin-top: -65px;
  }
`;
