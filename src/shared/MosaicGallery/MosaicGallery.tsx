import { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaginationDots } from '..';
import { colors } from '../../utils/';
import { MosaicGalleryArticle } from './MosaicGalleryArticle';
import {
  LeftArrowAside,
  MosaicGallertyDiv,
  MosaicGalleryFooter,
  MosaicGallerySection,
  MosaicGalleryWrapper,
  RightArrowAside,
} from './MosaicGallery.styled';

interface MosaicItems {
  image: string;
  cards: string[];
  url: string;
  alt: string;
}

interface Props {
  items: MosaicItems[];
}

export const MosaicGallery = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const numberOfPages = Math.ceil(items.length / 2);

  const itemsEl = items.map((item, i) => (
    <MosaicGalleryArticle
      key={`mosaicGallery-item-${i}`}
      image={item.image}
      alt={item.alt}
      height={'300px'}
      width={'100%'}
      cards={item.cards}
      url={item.url}
    />
  ));

  const handleLeftArrowClick = () => {
    if (activeIndex - 1 < 0) {
      setActiveIndex(numberOfPages - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (activeIndex + 1 > numberOfPages - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleDotClick = (index: number) => setActiveIndex(index);

  return (
    <MosaicGalleryWrapper className="projects-mosaic-gallery-wrapper">
      <MosaicGallerySection
        className="mosaic-gallery-section"
        index={activeIndex}
        itemsLength={items.length}
      >
        <LeftArrowAside className="mosaic-gallery-left-arrow" onClick={handleLeftArrowClick}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color={colors.gray} />
        </LeftArrowAside>
        <MosaicGallertyDiv
          className={`mosaic-gallery-div scrolled-${activeIndex}`}
          index={activeIndex}
        >
          {itemsEl}
        </MosaicGallertyDiv>
        <RightArrowAside className="mosaic-gallery-right-arrow" onClick={handleRightArrowClick}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color={colors.gray} />
        </RightArrowAside>
      </MosaicGallerySection>
      <MosaicGalleryFooter className="mosaic-gallery-footer">
        <PaginationDots
          numberOfPages={numberOfPages}
          activeIndex={activeIndex}
          handleDotClick={handleDotClick}
        />
      </MosaicGalleryFooter>
    </MosaicGalleryWrapper>
  );
};
