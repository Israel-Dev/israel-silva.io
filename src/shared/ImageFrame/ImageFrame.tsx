import { useState } from 'react';
import {
  Background,
  ButtonWrapper,
  CardsWrapper,
  Image,
  ImageFrameArticle,
  Overlay,
  OverlayContent,
} from './ImageFrame.styled';
import { Button, Card } from '../';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface OverlayProps {
  hasOverlay: boolean;
  color?: string;
  isReverse?: boolean;
  cards?: string[];
  clickUrl?: string;
}

interface Props {
  src: string;
  alt: string;
  height: string;
  width: string;
  overlayData?: OverlayProps;
}

export const ImageFrame = ({ src, alt, height, width, overlayData }: Props) => {
  const history = useHistory();
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });
  const [hover, setIsHover] = useState<boolean>(false);

  const cardsEl = overlayData?.cards?.map((card, i) => <Card key={`card-${i}`} label={card} />);

  return (
    <ImageFrameArticle
      className="image-frame-article"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isReverse={overlayData?.isReverse}
    >
      {overlayData?.hasOverlay && (
        <>
          {overlayData.cards && (
            <OverlayContent
              className={`image-frame-overlay-content ${hover ? 'overlay-content-hovered' : ''}`}
            >
              <CardsWrapper className="image-frame-overlay-cards-wrapper">{cardsEl}</CardsWrapper>
              {overlayData.clickUrl && (
                <ButtonWrapper className="button-wrapper">
                  <Button
                    label={t('view-more')}
                    callback={() => history.push(overlayData.clickUrl as string)}
                  />
                </ButtonWrapper>
              )}
            </OverlayContent>
          )}
          <Overlay
            className={`image-frame-overlay ${hover ? 'overlay-hovered' : ''}`}
            height={height}
            width={width}
            color={overlayData.color}
            isReverse={overlayData.isReverse}
            hover={hover}
          />
        </>
      )}
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={`image-frame-img ${hover ? 'image-hovered' : ''}`}
      />
      <Background
        height={height}
        width={width}
        className={`image-frame-background ${hover ? 'image-backgrounc-hovered' : ''}`}
      />
    </ImageFrameArticle>
  );
};
