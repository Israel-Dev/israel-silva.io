import React from 'react';
import ReactDOM from 'react-dom';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { colors } from '../../utils/colors';
import styles from './LanguagePicker.styled';

const LanguagePickerEl = document.getElementById('language-picker-portal');

export const LanguagePicker = (props: any) => {
    const [lang, setLang] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const langs = [
        { name: 'English', value: 'ENG' },
        { name: 'Português', value: 'PT' },
        { name: 'Français', value: 'FR' },
    ];

    const showUnderline = (lang: string, i: number) => {
        const underline = document.querySelector(`#${lang}-${i}-underline`);

        if (underline) underline.classList.add('visible-bar');
    };

    const hideUnderline = (lang: string, i: number) => {
        const underline = document.querySelector(`#${lang}-${i}-underline`);

        if (underline) underline.classList.remove('visible-bar');
    };

    const langOptions = langs.map((lang, i) => {
        return (
            <article
                key={`${lang.value}-${i}`}
                className="lang-option"
                onClick={() => {
                    setLang(i);
                    setIsOpen(false);
                }}
                onMouseEnter={() => showUnderline(lang.value, i)}
                onMouseLeave={() => hideUnderline(lang.value, i)}
            >
                <p className="lang-name-menu">{lang.name}</p>
                <div
                    id={`${lang.value}-${i}-underline`}
                    className="hover-underline"
                ></div>
            </article>
        );
    });

    return (
        <>
            <styles.LangPickerIconWrapper className="lang-icon-wrapper">
                <p className="lang-name">{langs[lang].value}</p>
                <i className="globe-icon" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon
                        icon={faGlobe}
                        size="2x"
                        color={colors.green}
                    />
                </i>
            </styles.LangPickerIconWrapper>
            {LanguagePickerEl &&
                ReactDOM.createPortal(
                    <>
                        <styles.LangPickerWrapper
                            className="langPicker-wrapper"
                            isOpen={isOpen}
                        >
                            {langOptions}
                        </styles.LangPickerWrapper>
                    </>,
                    LanguagePickerEl
                )}
        </>
    );
};
