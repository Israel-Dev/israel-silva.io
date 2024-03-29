import styled from 'styled-components';
import { mobileMinWidth } from 'utils';
import { colors } from '../../utils/colors';

export const HomeWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .text {
    color: ${colors.green};
  }

  .content-wrapper {
    width: 90vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .header {
    margin-top: 1vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .section {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: ${mobileMinWidth}) {
    flex-direction: column;
  }
`;

export const HomeAside = styled.aside``;

export const HomeArticle = styled.article`
  margin-right: 5%;
`;

export const HomeImage = styled.img`
  max-width: 600px;
  border-radius: 50px;

  @media (max-width: ${mobileMinWidth}) {
    width: 80vw;
    max-width: 500px;
  }
`;
