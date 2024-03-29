import styled, { keyframes } from 'styled-components';
import { mobileMinWidth } from 'utils';
import { colors } from '../../utils/colors';

const flicker = keyframes`
    0% {
        opacity: 0;
    } 50% {
        opacity: .5;
    } 100% {
        opacity: 1;
    }
`;

export const MainTitleStyle = styled.div`
  .title {
    color: ${colors.green};
    font-size: 4.3em;
    font-weight: lighter;
    margin: 0;
  }

  .title:after {
    content: '_';
    color: ${colors.green};
    opacity: 0;
    animation: ${flicker} 1.5s linear reverse infinite;
    animation-delay: 6s;
  }

  @media (max-width: ${mobileMinWidth}) {
    .title {
      font-size: 2.3em;
      text-align: center;
    }

    .subtitle {
      text-align: center;
    }
  }
`;
