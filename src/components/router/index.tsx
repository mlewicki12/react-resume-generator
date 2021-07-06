
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Resume from '../resume';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/resume' />
        </Route>

        <Route path='/resume' component={Resume} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;