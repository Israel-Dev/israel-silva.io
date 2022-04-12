import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ImageGalleryFooter,
  ImageGalleryImg,
  ImageGallerySection,
  PaginationFooter,
} from "./ImageGallery.styled";
import everis from "../../assets/everis.jpg";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { LeftArrowAside, RightArrowAside } from "./ImageGallery.styled";
import { colors } from "../../utils";
import { PaginationDots } from "../PaginationDots";

interface Props {}

export const ImageGallery = () => {
  const handleLeftArrowClick = () => {};

  const handleRightArrowClick = () => {};

  return (
    <>
      <ImageGallerySection className="image-gallery-section">
        <LeftArrowAside
          className="mosaic-gallery-left-arrow"
          onClick={handleLeftArrowClick}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color={colors.gray} />
        </LeftArrowAside>
        <ImageGalleryImg
          src={everis}
          alt={"Something"}
          height="100%"
          width="100%"
          className="image-gallery-img"
        />
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
      </ImageGallerySection>
      <ImageGalleryFooter className="image-gallery-footer">
        <PaginationFooter className="pagination-footer">
          <PaginationDots
            numberOfPages={3}
            activeIndex={0}
            handleDotClick={() => {}}
          />
        </PaginationFooter>
      </ImageGalleryFooter>
    </>
  );
};
