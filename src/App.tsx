import React, { useEffect, useState } from 'react';
import AppStyled, { AppHeader } from './App.styled';
import { Routes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { Loading, Menu, LanguagePicker } from './shared';
import { colors } from './utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  });

  return (
    <AppStyled className="app-wrapper">
      <Router>
        <Loading isLoading={isLoading} />

        <AppHeader className="app-header">
          <p className="text">{t('software-engineer')}</p>
          <Menu />
        </AppHeader>
        <section className="app-section">
          <Routes />
        </section>
        <footer className="footer">
          <FontAwesomeIcon icon={faDownload} size="2x" color={colors.green} />
          <LanguagePicker />
        </footer>
      </Router>
    </AppStyled>
  );
};

export default App;
