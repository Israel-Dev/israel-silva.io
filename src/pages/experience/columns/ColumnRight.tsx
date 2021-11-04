import { ImageFrame } from '../../../shared';
import { ImageLabel, ImageWrapper, RightColumnWrapper } from './Columns.styled';

interface Props {
    src: string;
    alt: string;
    enterpriseName: string;
}

export const ColumnRight = ({ src, alt, enterpriseName }: Props) => {
    return (
        <RightColumnWrapper className="right-column-wrapper">
            <ImageWrapper className="image-wrapper">
                <ImageFrame
                    src={src}
                    alt={alt}
                    height="100%"
                    width="100%"
                    hasOverlay={true}
                />
            </ImageWrapper>
            <ImageLabel>{enterpriseName}</ImageLabel>
        </RightColumnWrapper>
    );
};
