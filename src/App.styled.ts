import styled from 'styled-components';

const AppStyled = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .header {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vh;
    }
`;

export default AppStyled;
