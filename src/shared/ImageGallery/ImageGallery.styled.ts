import styled from 'styled-components';

export const ImageGallerySection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .hidden-image {
    position: absolute;
    opacity: 0;
    transition: all ease-in-out 0.4s;
  }
`;

export const ImageGalleryImg = styled.img`
  height: 100%;
  width: 85%;
  border-radius: 25px;
  opacity: 1;
  transition: all ease-in-out 0.4s;
`;

export const LeftArrowAside = styled.aside`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RightArrowAside = styled.aside`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImageGalleryFooter = styled.footer`
  width: 100%;
  margin: 3vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationFooter = styled.div`
  width: 30%;
`;
