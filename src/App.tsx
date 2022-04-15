import React, { useEffect, useState } from 'react';
import AppStyled from './App.styled'
import { Routes } from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Loading, Menu, LanguagePicker } from './shared'
import { colors } from './utils/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  });

  return (
    <AppStyled className="app-wrapper">
      <Router>
        <Loading isLoading={isLoading} />
        <header className="app-header">
          <p className="text">Software Engineer</p>
          <Menu />
        </header>
        <section className="app-section">
          <Routes />
        </section>
        <footer className="footer">
          <FontAwesomeIcon icon={faDownload} size="2x" color={colors.green} />
          <LanguagePicker />
        </footer>
                    </Router>
    </AppStyled>
  )
}

export default App
