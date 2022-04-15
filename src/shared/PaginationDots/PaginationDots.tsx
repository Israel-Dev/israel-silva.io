import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../utils';
import { PaginationDotsWrapper } from './PaginatrionDots.styled';

interface Props {
  numberOfPages: number;
  activeIndex: number;
  handleDotClick: (index: number) => void;
}

export const PaginationDots = ({ numberOfPages, activeIndex, handleDotClick }: Props) => {
  const dostEl = () => {
    const elements = [];

    for (let i = 0; i < numberOfPages; i++) {
      elements.push(
        <FontAwesomeIcon
          key={`pagination-dots-${i}`}
          icon={faCircle}
          className={`dot-${i === activeIndex ? 'active' : 'inactive'}`}
          onClick={() => handleDotClick(i)}
        />
      );
    }

    return elements;
  };

  return (
    <PaginationDotsWrapper className="pagination-dots-wrapper">{dostEl()}</PaginationDotsWrapper>
  );
};
