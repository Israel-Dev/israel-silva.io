import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { LangPickerIconWrapper, LangPickerWrapper } from './LanguagePicker.styled';
import { langs, colors } from 'utils';

const LanguagePickerEl = document.getElementById('language-picker-portal');

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
  }, [lang, i18n]);

  return (
    <>
      <LangPickerIconWrapper className="lang-icon-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <p className="lang-name">{langs[lang].shortName}</p>
        <i className="globe-icon">
          <FontAwesomeIcon icon={faGlobe} size="2x" color={colors.green} />
        </i>
      </LangPickerIconWrapper>
      {LanguagePickerEl &&
        ReactDOM.createPortal(
          <LangPickerWrapper className={isOpen ? 'visible-lang-picker' : ''}>
            {langOptions}
          </LangPickerWrapper>,
          LanguagePickerEl
        )}
    </>
  );
};
