import { TextBlockParagraph, TextBlockSection } from './TextBlock.styled';
import { Title } from '../';

export enum TextAlign {
    center = 'center',
    left = 'left',
    right = 'right',
    justify = 'justify',
}

interface Props {
    title: string;
    text?: string;
    header?: string;
    fullWidth?: boolean;
    hasFlickering?: boolean;
    hasUndeline?: boolean;
    textAlign?: TextAlign;
}

export const TextBlock = ({
    title,
    text,
    header,
    fullWidth,
    hasFlickering,
    hasUndeline,
    textAlign,
}: Props) => {
    return (
        <TextBlockSection fullWidth={fullWidth} textAlign={textAlign}>
            <Title
                title={title}
                hasUnderline={hasUndeline}
                hasFlickering={hasFlickering}
            />
            {header && <p>{header}</p>}
            {text && <TextBlockParagraph>{text}</TextBlockParagraph>}
        </TextBlockSection>
    );
};
