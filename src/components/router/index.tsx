
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ResumePage from '../../pages/resume';

import { ResumeComponent } from '../../types';
import definition from '../../definition.json';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/resume' />
        </Route>

        <Route path='/resume'>
          <ResumePage
            definition={definition as ResumeComponent[]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;