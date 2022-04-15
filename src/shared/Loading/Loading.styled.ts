import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/colors';

interface IProps {
  isLoading: boolean;
}

const StyledLoading = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.green};
  z-index: 100;

  background-color: ${(props: IProps) => (props.isLoading ? 'black' : 'none')};
  transition: background-color 0.5s 2s linear;

  .loading-text {
    font-size: 5em;
    margin: 0;
    transition: all linear 0.5s;
  }

  .bar {
    position: relative;
    width: 30vw;
    height: 5vh;
    border: solid 5px ${colors.green};
    border-radius: 10px;
    opacity: 1;
    transition: all linear 0.5s;
  }

  .hide {
    opacity: 0;
    transition: all linear 0.7s 1s;
  }

  .empty {
    position: absolute;
    width: 0vw;
    height: 100%;
    transition: all linear 0.7s;
  }

  .full {
    position: abolsute;
    width: 30vw;
    height: 100%;
    background-color: ${colors.green};
    transition: all linear 0.5s;
  }
`;

export default StyledLoading;
