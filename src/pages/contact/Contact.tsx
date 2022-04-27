import { useTranslation } from 'react-i18next';
import { PageTransition, TextBlock } from 'shared';
import { Form } from './components';
import { ContactMain, FormContainer } from './Contact.styled';

const Contact = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contact' });
  return (
    <PageTransition>
      <ContactMain>
        <TextBlock
          title={`03. ${t('title')}`}
          text={t('wanna-talk')}
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
