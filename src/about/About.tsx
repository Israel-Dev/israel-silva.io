import Israel from '../assets/Israel-silva.jpeg';
import {
    AboutMain,
    Column,
    ImageWrapper,
    TextBlockWrapper,
} from './About.styled';
import { ImageFrame, TextBlock } from '../shared/';

const About = () => {
    return (
        <AboutMain className="about-wrapper">
            <Column className="about-column-left">
                <TextBlockWrapper>
                    <TextBlock
                        fullWidth={true}
                        title="00. About Me"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!"
                    />
                </TextBlockWrapper>
                <ImageWrapper className="about-image-article">
                    <ImageFrame
                        src={Israel}
                        alt={'Israel Silva'}
                        height="300px"
                        width="300px"
                        hasOverlay={true}
                    />
                </ImageWrapper>
            </Column>
            <Column className="about-column-right">
                <h2>Column right</h2>
            </Column>
        </AboutMain>
    );
};

export default About;
