import { useTranslation } from 'react-i18next';
import { ImageFrame, List, PageTransition, TextBlock, Title } from 'shared';
import {
  AboutMain,
  AboutSection,
  ColumnRightArticle,
  ColumnRightHeader,
  DesktopRightSection,
  ImageWrapper,
  MobileSection,
  TextBlockWrapper,
} from './About.styled';
import Israel from 'assets/Israel-silva.jpeg';

export const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <PageTransition>
      <AboutMain className="about-wrapper">
        <AboutSection className="about-section">
          <TextBlockWrapper>
            <TextBlock
              hasFlickering={true}
              hasUndeline={true}
              fullWidth={true}
              title={`00. ${t('title')}`}
              text={t('description')}
            />
          </TextBlockWrapper>
          <MobileSection className="mobile-technologies-section">
            <Title title={t('some-technologies')} customHeight="22px" />
            <List
              items={[
                'React',
                'Redux',
                'React Native',
                'Node.JS',
                'AWS',
                'Docker',
                'TypeScript <3',
                'JavaScript',
                'CSS',
                'HTML',
              ]}
            />
          </MobileSection>
          <ImageWrapper className="about-image-article">
            <ImageFrame
              src={Israel}
              alt={'Israel Silva'}
              height="300px"
              width="300px"
              overlayData={{ hasOverlay: true }}
            />
          </ImageWrapper>
          <DesktopRightSection className="about-column-right-section">
            <ColumnRightHeader>
              <Title title={t('some-technologies')} customHeight="22px" />
            </ColumnRightHeader>
            <ColumnRightArticle>
              <List
                items={[
                  'React',
                  'Redux',
                  'React Native',
                  'Node.JS',
                  'AWS',
                  'Docker',
                  'TypeScript <3',
                  'JavaScript',
                  'CSS',
                  'HTML',
                ]}
              />
            </ColumnRightArticle>
          </DesktopRightSection>
        </AboutSection>
      </AboutMain>
    </PageTransition>
  );
};
