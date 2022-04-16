import { ProjectsMain } from './Projects.styled';
import { ProjectPage } from './ProjectPage';
import { TextBlock, MosaicGallery, PageTransition } from '../../shared';
import carlashes from '../../assets/carlashes.png';
import netmore from '../../assets/Netmore.png';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
  const location = useLocation();

  const projectId = new URLSearchParams(location.search).get('id');

  return (
    <PageTransition>
      <ProjectsMain className="projects-main-wrapper">
        <AnimatePresence exitBeforeEnter>
          {!projectId ? (
            <>
              <TextBlock
                title={'02. Projects'}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
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
