import { useState } from 'react';
import {
    Background,
    Image,
    ImageFrameArticle,
    Overlay,
} from './ImageFrame.styled';

interface Props {
    src: string;
    alt: string;
    height: string;
    width: string;
    hasOverlay?: boolean;
}

export const ImageFrame = ({ src, alt, height, width, hasOverlay }: Props) => {
    const [hover, setIsHover] = useState<boolean>(false);

    return (
        <ImageFrameArticle
            className="image-frame-article"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {hasOverlay && (
                <Overlay
                    className="image-frame-overlay"
                    height={height}
                    width={width}
                    hover={hover}
                />
            )}
            <Image
                src={src}
                alt={alt}
                height={height}
                width={width}
                // hover={hover}
                className="image-frame-img"
            />
            <Background height={height} width={width} />
        </ImageFrameArticle>
    );
};
