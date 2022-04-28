import styled from 'styled-components';
import { mobileMinWidth } from 'utils';

const AppStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .app-section {
    position: relative;
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vh;
  }
`;

export const AppHeader = styled.header`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${mobileMinWidth}) {
    min-height: 80px;
  }
`;

export default AppStyled;
