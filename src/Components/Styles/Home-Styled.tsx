import styled from 'styled-components'
import { colors } from '../../utils/colors'

const HomeWrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .header{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        color: ${colors.green}
    }
    .content-wrapper {
        width: 90vw;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }

    .header {
        margin-top: 1vh; 
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .section {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }

    .profile-image {
        max-width: 600px;
    }

    .footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vh;
    }
`

export default { HomeWrapper }