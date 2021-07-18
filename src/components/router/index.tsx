
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ResumePage from '../../pages/resume';

import { ResumeComponent } from '../../types';
import definition from '../../definition.json';
import coverLetter from '../../cover-letter.json';
import CoverLetterPage from '../../pages/cover-letter';

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

        <Route path='/letter'>
          <CoverLetterPage
            content={coverLetter.content}
            header={coverLetter.header as ResumeComponent}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;