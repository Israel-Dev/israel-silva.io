import { TextBlockParagraph, TextBlockSection } from './TextBlock.styled';
import { Title } from '../';

interface Props {
    title: string;
    text?: string;
    header?: string;
    fullWidth?: boolean;
    hasFlickering?: boolean;
}

export const TextBlock = ({
    title,
    text,
    header,
    fullWidth,
    hasFlickering,
}: Props) => {
    return (
        <TextBlockSection fullWidth={fullWidth}>
            <Title
                title={title}
                hasUnderline={true}
                hasFlickering={hasFlickering}
            />
            {text && <TextBlockParagraph>{text}</TextBlockParagraph>}
        </TextBlockSection>
    );
};
