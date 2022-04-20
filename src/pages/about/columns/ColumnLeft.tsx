import { useTranslation } from 'react-i18next';
import Israel from '../../../assets/Israel-silva.jpeg';
import { ImageFrame, TextBlock } from '../../../shared';
import { Column, ImageWrapper, TextBlockWrapper } from './Column.styled';

export const ColumnLeft = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });
  return (
    <Column className="about-column-left">
      <TextBlockWrapper>
        <TextBlock
          hasFlickering={true}
          hasUndeline={true}
          fullWidth={true}
          title={`00. ${t('title')}`}
          text={t('description')}
        />
      </TextBlockWrapper>
      <ImageWrapper className="about-image-article">
        <ImageFrame
          src={Israel}
          alt={'Israel Silva'}
          height="300px"
          width="300px"
          overlayData={{ hasOverlay: true }}
        />
      </ImageWrapper>
    </Column>
  );
};
