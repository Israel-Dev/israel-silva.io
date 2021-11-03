import { AboutMain } from './About.styled';
import { ColumnLeft, ColumnRight } from './columns';

export const About = () => {
    return (
        <AboutMain className="about-wrapper">
            <ColumnLeft />
            <ColumnRight />
        </AboutMain>
    );
};
