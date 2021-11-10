import { ProjectsMain } from './Projects.styled';
import { TextBlock, MosaicGallery } from '../../shared';
import carlashes from '../../assets/carlashes.png';
import netmore from '../../assets/Netmore.png';

const projectItems = [
    {
        image: carlashes,
        cards: ['Typescript', 'Node.TS', 'Express', 'React', 'MongoDB'],
        url: '/projects/carlashes',
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
        url: '/projects/netmore',
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
        url: '/projects/carlashes',
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
        url: '/projects/netmore',
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
        url: '/projects/carlashes',
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
        url: '/projects/netmore',
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
        url: '/projects/carlashes',
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
        url: '/projects/netmore',
        alt: 'Netmore',
    },
];

export const Projects = () => {
    return (
        <ProjectsMain className="projects-main-wrapper">
            <TextBlock
                title={'Projects'}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
                fullWidth={true}
                hasUndeline={true}
            />
            <MosaicGallery items={projectItems} />
        </ProjectsMain>
    );
};
