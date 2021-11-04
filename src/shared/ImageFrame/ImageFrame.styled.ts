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
        opacity: 0;
    }
`;

interface OverlayProps {
    hover?: boolean;
    height: string;
    width: string;
}

export const Overlay = styled.div`
    height: ${(props: OverlayProps) => props.height};
    width: ${(props: OverlayProps) => props.width};
    position: absolute;
    border-radius: ${borderRadius};
    z-index: 20;
    opacity: ${(props: OverlayProps) => (props.hover ? '0' : '0.3')};
    background-color: ${colors.green};
    transition: all ease-in-out 0.3s;
`;

interface ImageProps {
    hover?: boolean;
}

export const Image = styled.img`
    position: relative;
    display: block;
    border-radius: ${borderRadius};
    margin-left: 0;
    margin-top: 0;
    transition: all 0.4s ease-in-out;
`;

export const Background = styled.div`
    position: absolute;
    top: 15px;
    right: -15px;
    z-index: -5;
    border-radius: ${borderRadius};
    height: ${(props: { height: string; width: string }) => props.height};
    width: ${(props: { height: string; width: string }) => props.width};
    border: ${colors.green} solid 1px;
    transition: all 0.4s ease-in-out;
`;
