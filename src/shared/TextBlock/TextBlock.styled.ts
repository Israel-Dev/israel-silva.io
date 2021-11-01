import styled from 'styled-components';

export const TextBlockSection = styled.section`
    width: ${(props: { fullWidth?: boolean }) =>
        props.fullWidth ? '100%' : '45%'};
`;

export const TextBlockParagraph = styled.p``;
