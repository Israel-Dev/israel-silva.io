import { useState } from 'react';
import { Timeline, TextBlock, TextAlign, PageTransition, Accordion } from 'shared';
import { ColumnLeft, ColumnRight } from './columns';
import {
  AccordionContainer,
  AccordionContent,
  ColumnContainer,
  DesktopView,
  ExperienceMain,
  ExperienceSection,
  MobileView,
  StyledImage,
  StyledParagraph,
} from './Experience.styled';
import everis from 'assets/everis.jpg';
import bold01 from 'assets/BOLD.jpg';
import Netmore from 'assets/Netmore.png';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export interface Job {
  timeFrame: string;
  jobTitle: string;
  enterpriseName: string;
  enterpriseimage: string;
  longDescription: string;
}

const items: Job[] = [
  {
    timeFrame: 'Abr. 2021 - Present',
    enterpriseName: 'Devoteam',
    jobTitle: 'Frontend Developer',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dolore laboriosam quod nostrum ratione fuga quos cupiditate distinctio et earum impedit deleniti amet, aut error deserunt consequuntur enim. Aspernatur, corporis!',
    enterpriseimage: bold01,
  },
  {
    timeFrame: 'Out. 2020 - Mar. 2021',
    enterpriseName: 'Netmore',
    jobTitle: 'Fullstack Developer',
    longDescription: ``,
    enterpriseimage: Netmore,
  },
  {
    timeFrame: 'Sep. 2019 - Out. 2020',
    enterpriseName: 'NTT Data',
    jobTitle: 'Junior Frontend Developer',
    longDescription: '',
    enterpriseimage: everis,
  },
];

export const Experience = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' });
  const [activeDot, setActiveDot] = useState<Job | null>(null);

  const mappedItemsForTimeline = items.map((item, i) => ({
    ...item,
    timeFrame: t(`job_${i}.timeFrame`),
    description: item.enterpriseName,
    longDescription: t(`job_${i}.longDescription`),
  }));

  return (
    <PageTransition>
      <ExperienceMain className="experience-main">
        <DesktopView className="experience-desktop-view">
          <Timeline
            startText={t('a-long-time-ago')}
            endText={t('present')}
            clickCallback={setActiveDot}
            items={mappedItemsForTimeline}
          />
          <ExperienceSection className="experience-section">
            <AnimatePresence exitBeforeEnter>
              {activeDot ? (
                <PageTransition key={activeDot.jobTitle}>
                  <ColumnContainer>
                    <ColumnLeft {...activeDot} />
                    <ColumnRight
                      src={activeDot.enterpriseimage}
                      alt={activeDot.enterpriseName}
                      enterpriseName={activeDot.enterpriseName}
                    />
                  </ColumnContainer>
                </PageTransition>
              ) : (
                <PageTransition>
                  <TextBlock
                    key="experience"
                    title={`01. ${t('title')}`}
                    text={t('select-item')}
                    fullWidth={true}
                    hasUndeline={false}
                    textAlign={TextAlign.center}
                  />
                </PageTransition>
              )}
            </AnimatePresence>
          </ExperienceSection>
        </DesktopView>
        <MobileView className="experience-mobile-view">
          <AccordionContainer className="accordtion-container">
            {items.map((item) => (
              <Accordion
                key={`${item.jobTitle}-${item.timeFrame}`}
                item={{
                  title: `${item.jobTitle} \n\n@${item.enterpriseName} | ${item.timeFrame}`,
                  shortTitle: ``,
                  content: (
                    <AccordionContent>
                      <StyledImage src={item.enterpriseimage} alt={item.enterpriseName} />
                      <StyledParagraph>{item.longDescription}</StyledParagraph>
                    </AccordionContent>
                  ),
                }}
              />
            ))}
          </AccordionContainer>
        </MobileView>
      </ExperienceMain>
    </PageTransition>
  );
};
