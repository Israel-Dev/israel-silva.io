import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ImageGalleryFooter,
  ImageGalleryImg,
  ImageGallerySection,
  PaginationFooter,
} from './ImageGallery.styled';
import everis from '../../assets/everis.jpg';
import BOLD from '../../assets/BOLD.jpg';
import BOLD2 from '../../assets/BOLD_2.jpg';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LeftArrowAside, RightArrowAside } from './ImageGallery.styled';
import { colors } from '../../utils';
import { PaginationDots } from '../PaginationDots';
import { useState } from 'react';

const images = [everis, BOLD, BOLD2];

export const ImageGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleArrowClick = (side: 'left' | 'right') => {
    if (side === 'left' && activeImage > 0) {
      setActiveImage(activeImage - 1);
    } else if (side === 'left' && activeImage === 0) {
      setActiveImage(images.length - 1);
    } else if (side === 'right' && activeImage < images.length - 1) {
      setActiveImage(activeImage + 1);
    } else if (side === 'right' && activeImage === images.length - 1) {
      setActiveImage(0);
    }
  };

  const GalleryElem = images.map((image, i) => (
    <ImageGalleryImg
      key={`image-gallery-${i}`}
      src={image}
      alt={`image-gallery-${i}`}
      height="100%"
      width="100%"
      className={`image-gallery-img ${i !== activeImage ? 'hidden-image' : ''}`}
    />
  ));

  return (
    <>
      <ImageGallerySection className="image-gallery-section">
        <LeftArrowAside
          className="mosaic-gallery-left-arrow"
          onClick={() => handleArrowClick('left')}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color={colors.gray} />
        </LeftArrowAside>
        {GalleryElem}
        <RightArrowAside
          className="mosaic-gallery-right-arrow"
          onClick={() => handleArrowClick('right')}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" color={colors.gray} />
        </RightArrowAside>
      </ImageGallerySection>
      <ImageGalleryFooter className="image-gallery-footer">
        <PaginationFooter className="pagination-footer">
          <PaginationDots
            numberOfPages={images.length}
            activeIndex={activeImage}
            handleDotClick={setActiveImage}
          />
        </PaginationFooter>
      </ImageGalleryFooter>
    </>
  );
};
