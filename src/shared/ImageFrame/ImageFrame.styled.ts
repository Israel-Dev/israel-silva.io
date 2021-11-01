import styled from 'styled-components';
import { colors } from '../../utils/colors';

const borderRadius = '20px';

export const ImageFrameArticle = styled.article`
    position: relative;
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
`;

interface ImageProps {
    hover?: boolean;
}

export const Image = styled.img`
    border-radius: ${borderRadius};
    position: relative;
    margin-left: ${(props: ImageProps) => (props.hover ? '-20px' : '0')};
    margin-top: ${(props: ImageProps) => (props.hover ? '-20px' : '0')};
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
`;
