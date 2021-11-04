import { useState } from 'react';
import {
    Dot,
    EndText,
    Item,
    ItemDescription,
    ItemWrapper,
    Line,
    StartText,
    TimelineSection,
} from './Timeline.styled';

interface Item {
    timeFrame: string;
    description: string;
}

interface Props {
    startText?: string;
    endText?: string;
    items: Item[];
    clickCallback?: Function;
}

export const Timeline = ({
    items,
    clickCallback,
    startText,
    endText,
}: Props) => {
    const [visibleItem, setVisibleItem] = useState<number | null>(null);

    const itemsEl = items.map((item, i) => {
        return (
            <Item
                className="timeline-item"
                onMouseEnter={() => setVisibleItem(i)}
                onMouseLeave={() => setVisibleItem(null)}
                onClick={clickCallback ? () => clickCallback() : undefined}
                key={`${i}-item`}
            >
                <Dot />
                <ItemDescription
                    className={`item-description ${
                        typeof visibleItem === 'number' && visibleItem === i
                            ? 'visible-item'
                            : 'hidden-item'
                    }`}
                >
                    <span>{item.timeFrame}</span>
                    <br />
                    <span>{item.description}</span>
                </ItemDescription>
            </Item>
        );
    });

    return (
        <TimelineSection className="timeline-section">
            <ItemWrapper className="items-section">{itemsEl}</ItemWrapper>
            <Line className="timeline-line">
                {startText && (
                    <StartText className="timeline-start-text">
                        {startText}
                    </StartText>
                )}
                {endText && (
                    <EndText className="timeline-end-text">{endText}</EndText>
                )}
            </Line>
        </TimelineSection>
    );
};
