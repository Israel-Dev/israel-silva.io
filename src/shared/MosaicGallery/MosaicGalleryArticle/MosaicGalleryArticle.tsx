import { ImageFrame } from '../..';
import { MosaicGalleryArticleWrapper } from './MosaicGalleryArticle.styled';

interface Props {
    image: string;
    alt: string;
    height: string;
    width: string;
}

export const MosaicGalleryArticle = ({ image, alt, height, width }: Props) => (
    <MosaicGalleryArticleWrapper className="mosaic-gallery-article-wrapper">
        <ImageFrame src={image} alt={alt} height={height} width={width} />
    </MosaicGalleryArticleWrapper>
);
