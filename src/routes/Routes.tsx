import { Route, Switch } from "react-router-dom";
import { RoutePaths } from ".";
import { Home, About, Experience, Projects, Contact } from "../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route path={RoutePaths.about} component={About} />
      <Route path={RoutePaths.experience} component={Experience} />
      <Route path={RoutePaths.projects} component={Projects} />
      <Route path={RoutePaths.contact} component={Contact} />
      <Route path={[RoutePaths["/"], RoutePaths.home]} component={Home} />
    </Switch>
  );
};
