import styled from 'styled-components';
import { colors } from '../../utils/colors';

interface IProps {
  isOpen: boolean;
}

const LangPickerIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .lang-name {
    margin-right: 10px;
  }

  .globe-icon {
    z-index: 10;
  }

  .globe-icon:hover {
    cursor: pointer;
  }
`;

const LangPickerWrapper = styled.section`
  top: 0;
  left: 0;
  z-index: 30;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;

  visibility: ${(props: IProps) => (props.isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.3s linear;

  opacity: ${(props: IProps) => (props.isOpen ? '1' : '0')};
  transition: opacity 0.3s linear;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .lang-name-menu {
    margin: 0;
    border-bottom: none;
    transition: all 0.2s linear;
  }

  .lang-option {
    margin-bottom: 15px;
  }

  .hover-underline {
    width: 0%;
    height: 1px;
    background-color: ${colors.green};
    transition: all 0.2s ease-in-out;
  }

  .visible-bar {
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  .lang-name-menu:hover {
    transition: all 0.2s linear;
  }

  .lang-option:hover {
    color: ${colors.green};
    cursor: pointer;
  }
`;

export default { LangPickerWrapper, LangPickerIconWrapper };
