import { ProjectsMain } from './Projects.styled';
import { ProjectPage } from './ProjectPage';
import { TextBlock, MosaicGallery, PageTransition } from 'shared';
import carlashes from 'assets/carlashes.png';
import netmore from 'assets/Netmore.png';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const projectItems = [
  {
    image: carlashes,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB'],
    url: '?id=carlashes',
    alt: 'Carlashes',
  },
  {
    image: netmore,
    cards: ['Typescript', 'Node.TS', 'Express', 'React'],
    url: '?id=netmore',
    alt: 'Netmore',
  },
  {
    image: carlashes,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB', 'Mongoose'],
    url: '?id=carlashes',
    alt: 'Carlashes',
  },
  {
    image: netmore,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB', 'Mongoose'],
    url: '?id=netmore',
    alt: 'Netmore',
  },
  {
    image: carlashes,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB', 'Mongoose'],
    url: '?id=carlashes',
    alt: 'Carlashes',
  },
  {
    image: netmore,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB', 'Mongoose'],
    url: '?id=netmore',
    alt: 'Netmore',
  },
  {
    image: carlashes,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB', 'Mongoose'],
    url: '?id=carlashes',
    alt: 'Carlashes',
  },
  {
    image: netmore,
    cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB', 'Mongoose'],
    url: '?id=netmore',
    alt: 'Netmore',
  },
];

export const Projects = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });
  const location = useLocation();

  const projectId = new URLSearchParams(location.search).get('id');

  return (
    <PageTransition>
      <ProjectsMain className="projects-main-wrapper">
        <AnimatePresence exitBeforeEnter>
          {!projectId ? (
            <>
              <TextBlock
                title={`02. ${t('title')}`}
                text={t('description')}
                fullWidth={true}
                hasUndeline={true}
              />
              <MosaicGallery items={projectItems} />
            </>
          ) : (
            <ProjectPage id={projectId} key={projectId} />
          )}
        </AnimatePresence>
      </ProjectsMain>
    </PageTransition>
  );
};
