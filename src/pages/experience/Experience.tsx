import { Timeline } from '../../shared';

const items = [
    {
        timeFrame: 'Sep. 2019 - Feb. 2020',
        description: 'everis Solutions',
    },
    {
        timeFrame: 'Feb. 2020 - Oct. 2020',
        description: 'High Performance Center everis',
    },
    {
        timeFrame: 'Oct. 2020 - Apr. 2021',
        description: 'Netmore Electronics',
    },
    {
        timeFrame: 'Apr. 2021',
        description: 'BOLD by devoteam',
    },
];

export const Experience = () => {
    return (
        <>
            <Timeline
                startText="A long time ago in a galaxy far far away"
                endText="Present"
                clickCallback={() => console.log('Hello-world')}
                items={items}
            />
        </>
    );
};
