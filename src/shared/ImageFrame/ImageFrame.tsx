import { useState } from 'react';
import {
    Background,
    Image,
    ImageFrameArticle,
    Overlay,
} from './ImageFrame.styled';

interface OverlayProps {
    hasOverlay: boolean;
    color?: string;
    isReverse?: boolean;
}

interface Props {
    src: string;
    alt: string;
    height: string;
    width: string;
    overlayData?: OverlayProps;
}

export const ImageFrame = ({ src, alt, height, width, overlayData }: Props) => {
    const [hover, setIsHover] = useState<boolean>(false);

    return (
        <ImageFrameArticle
            className="image-frame-article"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            isReverse={overlayData?.isReverse}
        >
            {overlayData?.hasOverlay && (
                <Overlay
                    className={`image-frame-overlay ${
                        hover ? 'overlay-hovered' : ''
                    }`}
                    height={height}
                    width={width}
                    color={overlayData.color}
                    isReverse={overlayData.isReverse}
                    hover={hover}
                />
            )}
            <Image
                src={src}
                alt={alt}
                height={height}
                width={width}
                className={`image-frame-img ${hover ? 'image-hovered' : ''}`}
            />
            <Background
                height={height}
                width={width}
                className={`image-frame-background ${
                    hover ? 'image-backgrounc-hovered' : ''
                }`}
            />
        </ImageFrameArticle>
    );
};
