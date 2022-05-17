import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Children, useState } from 'react';
import { colors } from 'utils';
import { AccordionContent, AccordionContentSpacing, AccordionHeader } from './Accordtion.styled';

interface Props {
  item: { title: string; shortTitle: string; content: JSX.Element };
}

const Accordion = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AccordionHeader key={item.title} onClick={() => setIsOpen(!isOpen)}>
        <div>{item.title}</div>
        <aside>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size="2x" color={colors.green} />
        </aside>
      </AccordionHeader>
      {isOpen && (
        <AccordionContent className="accordion-content">
          <AccordionContentSpacing className="accordion-content-spacing">
            {item.shortTitle && <h3>{item.shortTitle}</h3>}
            {item.content}
          </AccordionContentSpacing>
        </AccordionContent>
      )}
    </>
  );
};

export default Accordion;
