import React, { useEffect, useState } from 'react';
import AppStyled from './App.styled';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { colors } from './utils/colors';
import { Loading, Menu, LanguagePicker } from './shared';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

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
                    <Switch>
                        <Route path={'/about'} component={About} />
                        <Route path={['/', '/home']} component={Home} />
                    </Switch>
                </section>
                <footer className="footer">
                    <FontAwesomeIcon
                        icon={faDownload}
                        size="2x"
                        color={colors.green}
                    />
                    <LanguagePicker />
                </footer>
            </Router>
        </AppStyled>
    );
};

export default App;
