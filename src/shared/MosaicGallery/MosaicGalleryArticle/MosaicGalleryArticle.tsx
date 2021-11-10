import { ImageFrame } from '../..';
import { colors } from '../../../utils';
import { MosaicGalleryArticleWrapper } from './MosaicGalleryArticle.styled';

interface Props {
    image: string;
    alt: string;
    height: string;
    width: string;
    cards?: string[];
}

export const MosaicGalleryArticle = ({
    image,
    alt,
    height,
    width,
    cards,
}: Props) => (
    <MosaicGalleryArticleWrapper className="mosaic-gallery-article-wrapper">
        <ImageFrame
            src={image}
            alt={alt}
            height={height}
            width={width}
            overlayData={{
                hasOverlay: true,
                color: colors.black,
                isReverse: true,
                cards,
            }}
        />
    </MosaicGalleryArticleWrapper>
);
