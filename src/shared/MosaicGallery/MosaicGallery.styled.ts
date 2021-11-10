import styled from 'styled-components';
import { colors } from '../../utils/colors';

const getScrollingClasses = (itemsLength: number) => {
    let classes = ``;

    for (let i = 0; i < Math.ceil(itemsLength / 2); i++) {
        classes += `
            .scrolled-${i} {
                top: 50%;
                transform: translateY(-50%);
                left: ${getLeftParam(i)} !important;
                transition: all ease-in-out .4s;
            };
            `;
    }

    return classes;
};

export const MosaicGalleryWrapper = styled.section`
    /* margin-top: 5vh; */
`;

export const MosaicGallerySection = styled.section`
    position: relative;
    width: 100%;
    height: 40vh;
    transition: all ease-in-out 0.4s;
    overflow: hidden;

    ${(props: { itemsLength: number; index: number }) =>
        getScrollingClasses(props.itemsLength)};
`;

const getLeftParam = (index: number) => {
    if (index === 0) {
        return '0vw';
    } else {
        return `-${index * 90}vw`;
    }
};

export const MosaicGallertyDiv = styled.div`
    position: absolute;
    height: auto;
    /* left: ${(props: { index: number }) => getLeftParam(props.index)}; */
    top: 0;
    display: -webkit-inline-box;
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

export const MosaicGalleryFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
