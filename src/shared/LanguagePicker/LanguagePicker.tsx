import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { colors } from '../../utils/colors';
import styles, { LangPickerContainer } from './LanguagePicker.styled';
import { useTranslation } from 'react-i18next';

const LanguagePickerEl = document.getElementById('language-picker-portal');

const langs = [
  { name: 'English', value: 'en-us', shortName: 'ENG' },
  { name: 'Português', value: 'pt', shortName: 'PT' },
  { name: 'Français', value: 'fr', shortName: 'FR' },
];

export const LanguagePicker = () => {
  const [lang, setLang] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const showUnderline = (langValue: string, i: number) => {
    const underline = document.querySelector(`#${langValue}-${i}-underline`);

    if (underline) underline.classList.add('visible-bar');
  };

  const hideUnderline = (langValue: string, i: number) => {
    const underline = document.querySelector(`#${langValue}-${i}-underline`);

    if (underline) underline.classList.remove('visible-bar');
  };

  const langOptions = langs.map((language, i) => {
    return (
      <article
        key={`${language.value}-${i}`}
        className="lang-option"
        onClick={() => {
          setLang(i);
          setIsOpen(false);
        }}
        onMouseEnter={() => showUnderline(language.value, i)}
        onMouseLeave={() => hideUnderline(language.value, i)}
      >
        <p className="lang-name-menu">{language.name}</p>
        <div id={`${language.value}-${i}-underline`} className="hover-underline"></div>
      </article>
    );
  });

  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(langs[lang].value);
  }, [lang]);

  return (
    <LangPickerContainer>
      <styles.LangPickerIconWrapper className="lang-icon-wrapper">
        <p className="lang-name">{langs[lang].shortName}</p>
        <i className="globe-icon" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faGlobe} size="2x" color={colors.green} />
        </i>
      </styles.LangPickerIconWrapper>
      {LanguagePickerEl &&
        ReactDOM.createPortal(
          <styles.LangPickerWrapper className={isOpen ? '' : 'hidden'} isOpen={isOpen}>
            {langOptions}
          </styles.LangPickerWrapper>,
          LanguagePickerEl
        )}
    </LangPickerContainer>
  );
};
