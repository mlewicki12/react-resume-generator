
import ResumeElement from '../resume-element';

import { ResumeComponent } from '../../types';
import useStylesheet from '../../hooks/stylesheet';

type Resume = {
  components: ResumeComponent[];
}

const Resume = ({
  components
}: Resume) => {
  useStylesheet('style.css');

  return (
    <div className='resume-root'>
      {components.map(component => (
        <ResumeElement component={component} />
      ))}
    </div>
  )
}

export default Resume;