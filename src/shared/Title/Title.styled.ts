import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const TitleH1 = styled.h1`
    font-size: 30px;
    font-weight: 100;
    color: ${colors.green};
    margin-bottom: 17px;
    font-size: ${(props: { customHeight?: string }) =>
        props.customHeight && props.customHeight};
`;

export const Underscore = styled.span``;

export const Underline = styled.div`
    height: 0.5px;
    background-color: white;
    width: 100%;
`;
