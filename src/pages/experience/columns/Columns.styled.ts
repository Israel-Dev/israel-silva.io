import styled from 'styled-components';

export const LeftColumnWrapper = styled.article`
  max-width: 28vw;
`;

export const RightColumnWrapper = styled.article`
  max-width: 40vw;
  min-height: 40vh;
  max-height: 45vh;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageLabel = styled.p`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  transform: translateY(400%);
`;
