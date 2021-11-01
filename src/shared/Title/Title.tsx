import { TitleH1, Underline, Underscore } from './Title.styled';

interface props {
    title: string;
    hasUnderline?: boolean;
}

export const Title = ({ title, hasUnderline }: props) => {
    return (
        <>
            <TitleH1>
                {title}
                <Underscore>_</Underscore>
            </TitleH1>
            {hasUnderline && <Underline />}
        </>
    );
};
