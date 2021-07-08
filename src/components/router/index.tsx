
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ResumePage from '../../pages/resume';

import definition from '../../definition.json';
import { ResumeDefinition } from '../../types';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/resume' />
        </Route>

        <Route path='/resume'>
          <ResumePage
            definition={definition}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;