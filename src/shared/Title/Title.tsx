import { TitleStyled, Underline, Underscore } from './Title.styled';

interface props {
    title: string;
}

export const Title = ({ title }: props) => {
    return (
        <>
            <TitleStyled>
                {title}
                <Underscore>_</Underscore>
            </TitleStyled>
            <Underline />
        </>
    );
};
