import { PageTransition, TextBlock } from '../../shared';
import { Form } from './components';
import { ContactMain, FormContainer } from './Contact.styled';

const Contact = () => {
  return (
    <PageTransition>
      <ContactMain>
        <TextBlock
          title={'03. Contact'}
          text={`Want to talk with me? Just send me an email at me@israel-silva.io or fill the form underneath.`}
          fullWidth={true}
          hasUndeline={true}
        />
        <FormContainer>
          <Form />
        </FormContainer>
      </ContactMain>
    </PageTransition>
  );
};

export default Contact;
