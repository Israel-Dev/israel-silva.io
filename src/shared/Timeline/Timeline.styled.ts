import styled from 'styled-components';
import { colors } from '../../utils/colors';

const DotDiameter = 17.5;

export const TimelineSection = styled.section`
    position: relative;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Line = styled.div`
    position: absolute;
    left: -20%;
    background-color: ${colors.green};
    height: 5px;
    width: 118%;
    top: 0;
`;

export const ItemWrapper = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .visible-item {
        opacity: 1;
        transition: all ease-in-out 0.3s;
    }

    .hidden-item {
        opacity: 0;
        transition: all ease-in-out 0.3s;
    }
`;

export const Item = styled.div`
    position: relative;
    margin-top: -${DotDiameter / 2 - 2}px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const ItemDescription = styled.article`
    text-align: center;
    margin-top: 20px;
`;

export const Dot = styled.div`
    height: ${DotDiameter}px;
    width: ${DotDiameter}px;
    border-radius: 15px;
    background-color: ${colors.green};
`;

export const StartText = styled.p`
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    max-width: 300px;
    transform: translate(10%, -165%);
`;

export const EndText = styled.h3`
    position: absolute;
    right: 0;
    transform: translate(120%, -40%);
    top: 0;
    margin: 0;
    padding: 0;
`;
