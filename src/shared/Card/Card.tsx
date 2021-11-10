import { CardWrapper } from './Card.styled';

interface Props {
    label: string;
}

export const Card = ({ label }: Props) => {
    return <CardWrapper className="card-wrapper">{label}</CardWrapper>;
};
