import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const MenuNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .pages-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .page-title {
        font-size: 1.2em;
        margin-right: 25px;
    }

    .page-index {
        color: ${colors.green};
    }
`;
