import { useState } from 'react';
import { Timeline, TextBlock, TextAlign, PageTransition } from 'shared';
import { ColumnLeft, ColumnRight } from './columns';
import { ColumnContainer, ExperienceMain, ExperienceSection } from './Experience.styled';
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
    timeFrame: '',
    enterpriseName: 'everis Solutions',
    jobTitle: 'Junior Frontend Developer',
    longDescription: '',
    enterpriseimage: everis,
  },
  {
    timeFrame: '',
    enterpriseName: 'Netmore',
    jobTitle: 'Fullstack Developer',
    longDescription: ``,
    enterpriseimage: Netmore,
  },
  {
    timeFrame: '',
    enterpriseName: 'Devoteam',
    jobTitle: 'Frontend Developer',
    longDescription: '',
    enterpriseimage: bold01,
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
      </ExperienceMain>
    </PageTransition>
  );
};
