import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from 'utils';
import { AccordionContainer, AccordionItem } from './Accordtion.styled';

interface Props {
  items: { title: string; shortTitle: string; content: JSX.Element }[];
}

const Accordion = ({ items }: Props) => {
  return (
    <AccordionContainer className="accordtion-container">
      {items.map((item) => (
        <AccordionItem key={item.title}>
          <div>{item.title}</div>
          <aside>
            <FontAwesomeIcon icon={faPlus} size="2x" color={colors.green} />
          </aside>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
