import { PageTransition } from '../../shared';
import { AboutMain } from './About.styled';
import { ColumnLeft, ColumnRight } from './columns';

export const About = () => {
  return (
    <PageTransition>
      <AboutMain className="about-wrapper">
        <ColumnLeft />
        <ColumnRight />
      </AboutMain>
    </PageTransition>
  );
};
