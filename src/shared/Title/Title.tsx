import { TitleH1, Underline, Underscore } from './Title.styled';

interface props {
    title: string;
    hasUnderline?: boolean;
    hasFlickering?: boolean;
    customHeight?: string;
}

export const Title = ({
    title,
    hasUnderline,
    hasFlickering,
    customHeight,
}: props) => {
    return (
        <>
            <TitleH1 customHeight={customHeight}>
                {title}
                {hasFlickering && <Underscore>_</Underscore>}
            </TitleH1>
            {hasUnderline && <Underline />}
        </>
    );
};
