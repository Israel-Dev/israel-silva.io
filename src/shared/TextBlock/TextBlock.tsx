import { TextBlockParagraph, TextBlockSection } from './TextBlock.styled';
import { Title } from '../';
import { MouseEventHandler } from 'react';

export enum TextAlign {
  center = 'center',
  left = 'left',
  right = 'right',
  justify = 'justify',
}

interface Props {
  title: string;
  titleClickCallback?: MouseEventHandler<HTMLHeadingElement>;
  text?: string;
  header?: string;
  fullWidth?: boolean;
  hasFlickering?: boolean;
  hasUndeline?: boolean;
  textAlign?: TextAlign;
}

export const TextBlock = ({
  title,
  titleClickCallback,
  text,
  header,
  fullWidth,
  hasFlickering,
  hasUndeline,
  textAlign,
}: Props) => {
  return (
    <TextBlockSection fullWidth={fullWidth} textAlign={textAlign}>
      <Title
        title={title}
        hasUnderline={hasUndeline}
        hasFlickering={hasFlickering}
        onClick={titleClickCallback}
      />
      {header && <p>{header}</p>}
      {text && <TextBlockParagraph>{text}</TextBlockParagraph>}
    </TextBlockSection>
  );
};
