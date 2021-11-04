import { useState } from 'react';
import { Timeline } from '../../shared';
import { ColumnLeft, ColumnRight } from './columns';
import { ExperienceMain, ExperienceSection } from './Experience.styled';
import everis from '../../assets/everis.jpg';
import HPC from '../../assets/hpc-everis.png';
import bold01 from '../../assets/BOLD.jpg';
import Netmore from '../../assets/Netmore.png';

export interface Job {
    timeFrame: string;
    jobTitle: string;
    enterpriseName: string;
    enterpriseimage: string;
    longDescription: string;
}

const items: Job[] = [
    {
        timeFrame: 'Sep. 2019 - Feb. 2020',
        enterpriseName: 'everis Solutions',
        jobTitle: 'Junior Software Engineer',
        longDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!',
        enterpriseimage: everis,
    },
    {
        timeFrame: 'Feb. 2020 - Oct. 2020',
        enterpriseName: 'High Performance Center everis',
        jobTitle: 'Junior Software Engineer',
        longDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!',
        enterpriseimage: HPC,
    },
    {
        timeFrame: 'Oct. 2020 - Apr. 2021',
        enterpriseName: 'Netmore Electronics',
        jobTitle: 'Full Stack Engineer',
        longDescription: `- Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!`,
        enterpriseimage: Netmore,
    },
    {
        timeFrame: 'Apr. 2021',
        enterpriseName: 'BOLD by devoteam',
        jobTitle: 'Software Engineer',
        longDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!',
        enterpriseimage: bold01,
    },
];

const mappedItemsForTimeline = items.map((item) => ({
    ...item,
    timeFrame: item.timeFrame,
    description: item.enterpriseName,
}));

export const Experience = () => {
    const [activeDot, setActiveDot] = useState<Job | null>(null);

    return (
        <>
            <ExperienceMain className="experience-main">
                <Timeline
                    startText="A long time ago in a galaxy far far away"
                    endText="Present"
                    clickCallback={setActiveDot}
                    items={mappedItemsForTimeline}
                />
                <ExperienceSection className="experience-section">
                    {activeDot && (
                        <>
                            <ColumnLeft {...activeDot} />
                            <ColumnRight
                                src={activeDot.enterpriseimage}
                                alt={activeDot.enterpriseName}
                                enterpriseName={activeDot.enterpriseName}
                            />
                        </>
                    )}
                </ExperienceSection>
            </ExperienceMain>
        </>
    );
};
