import styled from 'styled-components';
import { colors } from '../../utils';

export const PaginationDotsWrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    max-width: 50vw;
    min-width: 15vw;

    .dot-active {
        color: ${colors.green};
        transform: scale(1.3);
        transition: all ease-in-out 0.4s;
    }

    .dot-inactive {
        color: ${colors.gray};
        transition: all ease-in-out 0.4s;
        cursor: pointer;
    }
`;
