import styled from 'styled-components';
import { TextAlign } from './TextBlock';

export const TextBlockSection = styled.section`
    width: ${(props: { fullWidth?: boolean; textAlign?: TextAlign }) =>
        props.fullWidth ? '100%' : '45%'};
    text-align: ${(props: { fullWidth?: boolean; textAlign?: TextAlign }) =>
        props.textAlign ? props.textAlign : TextAlign.left};
`;

export const TextBlockParagraph = styled.p``;
