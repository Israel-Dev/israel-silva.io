import Israel from '../../assets/Israel-silva.jpeg';
import { ImageFrame, TextBlock } from '../../shared';
import { Column, ImageWrapper, TextBlockWrapper } from './Column.styled';

export const ColumnLeft = () => {
    return (
        <Column className="about-column-left">
            <TextBlockWrapper>
                <TextBlock
                    hasFlickering={true}
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
    );
};
