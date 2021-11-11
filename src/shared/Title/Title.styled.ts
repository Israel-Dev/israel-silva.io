import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const TitleH1 = styled.h1`
    font-size: 30px;
    font-weight: 100;
    color: ${colors.green};
    margin-bottom: 17px;
    font-size: ${(props: { customHeight?: string }) =>
        props.customHeight && props.customHeight};
    transition: all ease-in-out 0.3s;

    ${(props: { onClick?: MouseEventHandler<HTMLHeadingElement> }) => {
        return `
            :hover {
                cursor: ${props.onClick ? 'pointer' : 'default'};
                transform: ${props.onClick ? 'translateX(1%)' : 'none'};
                transition: all ease-in-out .3s;
            }
        `;
    }}
`;

export const Underscore = styled.span``;

export const Underline = styled.div`
    height: 0.5px;
    background-color: white;
    width: 100%;
`;
