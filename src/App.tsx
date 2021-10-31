import React, { useEffect, useState } from 'react';
import AppStyled from './App.styled';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loading from './shared/Loading';

import Home from './home/Home';
import MenuComponent from './shared/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { colors } from './utils/colors';
import LanguagePicker from './shared/Language-Picker';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    });

    return (
        <AppStyled className="app-wrapper">
            <Loading isLoading={isLoading} />
            <header className="header">
                <p className="text">Software Engineer</p>
                <MenuComponent />
            </header>
            <Router>
                <Switch>
                    <Route path={['/', '/home']} component={Home} />
                </Switch>
            </Router>
            <footer className="footer">
                <FontAwesomeIcon
                    icon={faDownload}
                    size="2x"
                    color={colors.green}
                />
                <LanguagePicker />
            </footer>
        </AppStyled>
    );
};

export default App;
