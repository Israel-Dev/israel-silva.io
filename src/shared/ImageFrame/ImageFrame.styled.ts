import styled from 'styled-components';
import { colors } from '../../utils/colors';

const borderRadius = '20px';

export const ImageFrameArticle = styled.article`
  position: relative;

  .overlay-hovered,
  .image-hovered,
  .image-backgrounc-hovered {
    transition: all 0.4s ease-in-out;
  }

  .overlay-hovered,
  .image-hovered {
    margin-left: -15px;
    margin-top: -15px;
  }

  .image-backgrounc-hovered {
    transition: all 0.4s ease-in-out;
    margin-left: 15px;
  }

  .overlay-hovered {
    opacity: ${(props: { isReverse?: boolean }) => (props.isReverse ? '.7;' : '0;')};
  }

  .image-frame-overlay-content {
    opacity: 0;
    transition: all ease-in-out 0.4s;
  }

  .overlay-content-hovered {
    opacity: 1;
    transition: all ease-in-out 0.4s;
  }
`;

interface OverlayProps {
  height: string;
  width: string;
  hover?: boolean;
  color?: string;
  isReverse?: boolean;
}

export const Overlay = styled.div`
  height: ${(props: OverlayProps) => (props.hover ? '115%' : '100%')};
  width: ${(props: OverlayProps) => props.width};
  position: absolute;
  border-radius: ${borderRadius};
  z-index: 20;

  ${(props: OverlayProps) =>
    props.isReverse
      ? `opacity: ${props.hover ? '0.3' : '0'};`
      : `opacity: ${props.hover ? '0' : '0.3'};`}

  background-color: ${(props: OverlayProps) => (props.color ? props.color : colors.green)};
  transition: all ease-in-out 0.3s;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 90%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CardsWrapper = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  position: relative;
  display: block;
  border-radius: ${borderRadius};
  margin-left: 0;
  margin-top: 0;
  transition: all 0.4s ease-in-out;
  object-fit: cover;
`;

export const Background = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: -5;
  border-radius: ${borderRadius};
  height: ${(props: { height: string; width: string }) => props.height};
  width: ${(props: { height: string; width: string }) => props.width};
  border: ${colors.green} solid 1px;
  transition: all 0.4s ease-in-out;
`;
