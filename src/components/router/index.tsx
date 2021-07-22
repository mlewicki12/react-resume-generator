
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ResumePage from '../../pages/resume';

import { ResumeComponent } from '../../types';
import CoverLetterPage from '../../pages/cover-letter';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <></>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;