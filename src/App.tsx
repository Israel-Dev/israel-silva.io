import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    });

    return (
        <Router>
            <Switch>
                <Route path={['/', '/home']} component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
