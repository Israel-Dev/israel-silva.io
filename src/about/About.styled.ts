import styled from 'styled-components';

export const AboutMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .about-column-left {
        height: 70vh;
    }
`;

export const Column = styled.section`
    width: 90%;
`;

export const TextBlockWrapper = styled.article`
    margin-bottom: 50px;
`;

export const ImageWrapper = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
`;
