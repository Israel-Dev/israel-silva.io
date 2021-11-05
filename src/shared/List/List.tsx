import { ListLI, ListLISpan, ListUL, ListWrapper } from './List.styled';

interface Props {
    items: string[] | React.ReactFragment[];
}

export const List = ({ items }: Props) => {
    const itemsEl = items.map((item, i) => {
        if (typeof item === 'string') {
            return (
                <ListLI className="list-item" key={`${i}-item`}>
                    <ListLISpan>_</ListLISpan>
                    {item}
                </ListLI>
            );
        }

        return item;
    });

    return (
        <ListWrapper className="list-wrapper">
            <ListUL className="list-ul">{itemsEl}</ListUL>
        </ListWrapper>
    );
};
