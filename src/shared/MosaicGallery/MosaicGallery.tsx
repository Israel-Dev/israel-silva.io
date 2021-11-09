import { useState } from 'react';
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImageFrame } from '..';
import { colors } from '../../utils/';
import {
    LeftArrowAside,
    MosaicGallertyDiv,
    MosaicGalleryArticle,
    MosaicGallerySection,
    RightArrowAside,
} from './MosaicGallery.styled';

interface MosaicItems {
    image: string;
    buttons: string[];
    url: string;
    alt: string;
}

interface Props {
    items: MosaicItems[];
}

export const MosaicGallery = ({ items }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const itemsEl = items.map((item, i) => (
        <MosaicGalleryArticle className="mosaic-gallery-article">
            <ImageFrame
                src={item.image}
                alt={item.alt}
                height="300px"
                width="100%"
            />
        </MosaicGalleryArticle>
    ));

    const handleLeftArrowClick = () => {
        if (activeIndex + 1 > Math.ceil(items.length / 2) - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleRightArrowClick = () => {
        if (activeIndex - 1 < 0) {
            setActiveIndex(Math.ceil(items.length / 2) - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <MosaicGallerySection
            className="mosaic-gallery-section"
            index={activeIndex}
            itemsLength={items.length}
        >
            <LeftArrowAside
                className="mosaic-gallery-left-arrow"
                onClick={handleLeftArrowClick}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="2x"
                    color={colors.gray}
                />
            </LeftArrowAside>
            <MosaicGallertyDiv
                className={`mosaic-gallery-div scrolled-${activeIndex}`}
                index={activeIndex}
            >
                {itemsEl}
            </MosaicGallertyDiv>
            <RightArrowAside
                className="mosaic-gallery-right-arrow"
                onClick={handleRightArrowClick}
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2x"
                    color={colors.gray}
                />
            </RightArrowAside>
        </MosaicGallerySection>
    );
};
