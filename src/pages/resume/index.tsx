
import Resume from '../../components/resume';
import { ResumeDefinition } from '../../types';

import { Separator, Job, Uni, Extra, ResumeComponent } from '../../types';

const separator = (info: Separator) => {
  return (
    <Resume.Separator title={info.title} />
  );
}

const job = (info: Job) => {
  return (
    <Resume.Job
      company={info.company}
      location={info.location}
      title={info.title}

      start={info.start}
      end={info.end}

      responsibilities={info.responsibilities}
    />
  );
}

const uni = (info: Uni) => {
  return (
    <Resume.Uni
      university={info.university}
      location={info.location}
      degree={info.location}

      start={info.start}
      end={info.end}

      gpa={info.gpa}
      awards={info.awards}
      extracurriculars={info.extracurriculars}
      coursework={info.coursework}
    />
  );
}

const extra = (info: Extra) => {
  return (
    <Resume.Extra
      title={info.title}
      description={info.description}
      start={info.start}
      end={info.end}
    />
  );
}

const constructElementFromJson = (json: ResumeComponent) => {
  switch(json.type) {
    case 'separator':
      return separator(json as Separator);

    case 'job':
      return job(json as Job);

    case 'uni':
      return uni(json as Uni);

    case 'extra':
      return extra(json as Extra);
    
    default:
      return <></>
  }
}

type ResumePage = {
  definition: ResumeDefinition;
}

const ResumePage = ({
  definition
}: ResumePage) => {
  return (
    <Resume>
      <Resume.Header 
        name={definition.header.name}
        position={definition.header.position}
        profile={definition.header.profile}
        separator={definition.header.separator}

        info={definition.header.info}
      />

      <Resume.Body>
        {definition.body.map(item => constructElementFromJson(item))}
      </Resume.Body>
    </Resume>
  );
}

export default ResumePage;