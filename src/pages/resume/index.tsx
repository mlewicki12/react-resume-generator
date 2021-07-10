
import Resume from '../../components/resume';
import { ResumeComponent } from '../../types';

type ResumePage = {
  definition: ResumeComponent[];
}

const ResumePage = ({
  definition
}: ResumePage) => {
  return (
    <Resume components={definition} />
  );
}

export default ResumePage;