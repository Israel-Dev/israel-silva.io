import { MouseEventHandler } from 'react';
import { TitleH1, Underline, Underscore } from './Title.styled';

interface props {
    title: string;
    onClick?: MouseEventHandler<HTMLHeadingElement>;
    hasUnderline?: boolean;
    hasFlickering?: boolean;
    customHeight?: string;
}

export const Title = ({
    title,
    onClick,
    hasUnderline,
    hasFlickering,
    customHeight,
}: props) => {
    return (
        <>
            <TitleH1 customHeight={customHeight} onClick={onClick}>
                {title}
                {hasFlickering && <Underscore>_</Underscore>}
            </TitleH1>
            {hasUnderline && <Underline />}
        </>
    );
};
