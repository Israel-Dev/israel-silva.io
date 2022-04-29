import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const LangPickerIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10000;
  cursor: pointer;

  .lang-name {
    z-index: 10000;
    margin-right: 10px;
  }

  .globe-icon {
    z-index: 10000;
  }

  .globe-icon:hover {
    cursor: pointer;
  }
`;

export const LangPickerWrapper = styled.section`
  top: 0;
  left: 0;
  z-index: 151;
  position: fixed;
  width: 100vw;
  height: 0;
  background-color: black;

  opacity: 0;
  transition: all 0.8s ease-in-out;

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
