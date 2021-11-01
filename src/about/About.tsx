import { AboutMain, Column } from './About.styled';
import { TextBlock } from '../shared/';

const About = () => {
    return (
        <AboutMain className="about-wrapper">
            <Column className="about-column-left">
                <TextBlock
                    fullWidth={true}
                    title="00. About Me"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
                />
            </Column>
            <Column className="about-column-right">
                <h2>Column right</h2>
            </Column>
        </AboutMain>
    );
};

export default About;
