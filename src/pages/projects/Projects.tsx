import { ProjectsMain } from './Projects.styled';
import { ProjectPage } from './ProjectPage';
import { TextBlock, MosaicGallery } from '../../shared';
import carlashes from '../../assets/carlashes.png';
import netmore from '../../assets/Netmore.png';
import { useLocation, useParams } from 'react-router-dom';

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
        cards: [
            'Typescript',
            'Node.TS',
            'Express',
            'React',
            'MongoDB',
            'Mongoose',
        ],
        url: '?id=carlashes',
        alt: 'Carlashes',
    },
    {
        image: netmore,
        cards: [
            'Typescript',
            'Node.TS',
            'Express',
            'React',
            'MongoDB',
            'Mongoose',
        ],
        url: '?id=netmore',
        alt: 'Netmore',
    },
    {
        image: carlashes,
        cards: [
            'Typescript',
            'Node.TS',
            'Express',
            'React',
            'MongoDB',
            'Mongoose',
        ],
        url: '?id=carlashes',
        alt: 'Carlashes',
    },
    {
        image: netmore,
        cards: [
            'Typescript',
            'Node.TS',
            'Express',
            'React',
            'MongoDB',
            'Mongoose',
        ],
        url: '?id=netmore',
        alt: 'Netmore',
    },
    {
        image: carlashes,
        cards: [
            'Typescript',
            'Node.TS',
            'Express',
            'React',
            'MongoDB',
            'Mongoose',
        ],
        url: '?id=carlashes',
        alt: 'Carlashes',
    },
    {
        image: netmore,
        cards: [
            'Typescript',
            'Node.TS',
            'Express',
            'React',
            'MongoDB',
            'Mongoose',
        ],
        url: '?id=netmore',
        alt: 'Netmore',
    },
];

export const Projects = () => {
    const location = useLocation();

    const projectId = new URLSearchParams(location.search).get('id');

    return (
        <ProjectsMain className="projects-main-wrapper">
            {!projectId ? (
                <>
                    <TextBlock
                        title={'Projects'}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
                        fullWidth={true}
                        hasUndeline={true}
                    />
                    <MosaicGallery items={projectItems} />
                </>
            ) : (
                <ProjectPage id={projectId} />
            )}
        </ProjectsMain>
    );
};
