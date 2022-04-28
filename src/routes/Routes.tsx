import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { RoutePaths } from '.';
import { Home, About, Experience, Projects, Contact } from '../pages';

const throttle = (fn: Function, time: number) => {
  let wait = false;

  return function () {
    if (!wait) {
      wait = true;
      fn(arguments[0]);

      setTimeout(() => {
        wait = false;
      }, time);
    }
  };
};

export const Routes = () => {
  const history = useHistory();
  const location = useLocation();

  const handleScroll = (event: WheelEvent) => {
    const { deltaY } = event;

    const PathsArr = [
      RoutePaths['/'],
      RoutePaths.home,
      RoutePaths.about,
      RoutePaths.experience,
      RoutePaths.projects,
      RoutePaths.contact,
    ];

    const activePath = PathsArr.findIndex((path) => window.location.pathname === path);

    console.log('activePath', activePath);
    console.log('deltaY', deltaY);

    if (deltaY <= 0 && activePath !== 1) {
      const newPath = activePath < 1 ? activePath : activePath - 1;

      if (newPath !== activePath) history.push(PathsArr[newPath]);
    } else if (deltaY > 0 && activePath === 0) {
      history.push(PathsArr[2]);
    } else if (deltaY > 0) {
      const newPath = activePath >= PathsArr.length - 1 ? activePath : activePath + 1;
      if (newPath !== activePath) history.push(PathsArr[newPath]);
    }
  };

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 1500);
    window.addEventListener('wheel', throttledHandleScroll);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        <Route path={RoutePaths.about} component={About} />
        <Route path={RoutePaths.experience} component={Experience} />
        <Route path={RoutePaths.projects} component={Projects} />
        <Route path={RoutePaths.contact} component={Contact} />
        <Route path={[RoutePaths['/'], RoutePaths.home]} component={Home} />
      </Switch>
    </AnimatePresence>
  );
};
