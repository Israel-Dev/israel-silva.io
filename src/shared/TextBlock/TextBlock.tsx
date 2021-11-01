import { TextBlockSection } from './TextBlock.styled';

interface Props {
    title: string;
    header?: string;
    fullWidth?: boolean;
}

export const TextBlock = ({ title, header, fullWidth }: Props) => {
    return <TextBlockSection>TextBlock</TextBlockSection>;
};
