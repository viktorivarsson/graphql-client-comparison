import { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomeRoute = lazy(() => import('./Home'));
const UserRoute = lazy(() => import('./User'));

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeRoute />
        </Route>
        <Route path="/users/:userId">
          <UserRoute />
        </Route>
        <Route path="*">
          <div>Not found</div>
        </Route>
      </Switch>
    </Router>
  );
};
