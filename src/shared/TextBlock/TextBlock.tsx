import { TextBlockParagraph, TextBlockSection } from './TextBlock.styled';
import { Title } from '../';

interface Props {
    title: string;
    text?: string;
    header?: string;
    fullWidth?: boolean;
}

export const TextBlock = ({ title, text, header, fullWidth }: Props) => {
    return (
        <TextBlockSection fullWidth={fullWidth}>
            <Title title={title} hasUnderline={true} />
            {text && <TextBlockParagraph>{text}</TextBlockParagraph>}
        </TextBlockSection>
    );
};
