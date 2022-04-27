import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared';
import TextArea from 'shared/TextArea/TextArea';
import { FormDiv, InputContainer, TextAreaContainer } from './Form.styled';

const Form = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contact' });

  return (
    <FormDiv className="form-container">
      <h2>{t('get-in-touch')}</h2>
      <InputContainer>
        <Input placeholder={t('your-name')} onChange={(e) => {}} />
      </InputContainer>
      <InputContainer>
        <Input placeholder={t('your-email')} onChange={(e) => {}} type={'email'} />
      </InputContainer>
      <InputContainer>
        <Input placeholder={t('your-company')} onChange={(e) => {}} />
      </InputContainer>
      <TextAreaContainer>
        <TextArea placeholder={t('your-message')} onChange={(e) => {}} />
      </TextAreaContainer>
      <Button label={t('send')} callback={() => {}} />
    </FormDiv>
  );
};

export default Form;
